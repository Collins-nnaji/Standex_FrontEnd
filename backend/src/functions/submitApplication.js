const { CosmosClient } = require("@azure/cosmos");
const { FormRecognizerClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const multiparty = require('multiparty');
const fs = require('fs');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            context.log.error('Error parsing form data:', err);
            context.res = {
                status: 400,
                body: "Invalid form data"
            };
            return;
        }

        const name = fields.name && fields.name[0];
        const email = fields.email && fields.email[0];
        const jobTitle = fields.jobTitle && fields.jobTitle[0];
        const resumeFile = files.resume && files.resume[0];

        if (!name || !email || !jobTitle || !resumeFile) {
            context.log.warn('Missing required fields:', { name, email, jobTitle, resumeFile });
            context.res = {
                status: 400,
                body: "Please pass all required fields in the request body"
            };
            return;
        }

        try {
            const resumeFileStream = fs.createReadStream(resumeFile.path);

            // Process the resume using Form Recognizer
            const formRecognizerClient = new FormRecognizerClient(
                process.env.FORM_RECOGNIZER_ENDPOINT,
                new AzureKeyCredential(process.env.FORM_RECOGNIZER_KEY)
            );

            context.log('Starting Form Recognizer process');
            const poller = await formRecognizerClient.beginRecognizeContent(resumeFileStream);
            const pages = await poller.pollUntilDone();
            context.log('Form Recognizer process completed');

            // Extract relevant information from the resume
            const resumeText = pages.map(page => page.lines.map(line => line.text).join(" ")).join("\n");

            // Store the application in Cosmos DB
            const cosmosClient = new CosmosClient({
                endpoint: process.env.COSMOS_DB_ENDPOINT,
                key: process.env.COSMOS_DB_KEY,
            });

            context.log('Connecting to Cosmos DB');
            const { database } = await cosmosClient.databases.createIfNotExists({ id: "JobApplicationsDB" });
            const { container } = await database.containers.createIfNotExists({ id: "Applications" });

            const newApplication = {
                id: new Date().toISOString(),
                name,
                email,
                jobTitle,
                resumeText,
                submissionDate: new Date().toISOString()
            };

            context.log('Inserting application into Cosmos DB');
            await container.items.create(newApplication);

            context.res = {
                status: 200,
                body: "Application submitted successfully"
            };
        } catch (error) {
            context.log.error('Error processing application:', error);
            context.res = {
                status: 500,
                body: `An error occurred while processing your application: ${error.message}`
            };
        }
    });
};
