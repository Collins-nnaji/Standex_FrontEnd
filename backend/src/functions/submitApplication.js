const { CosmosClient } = require("@azure/cosmos");
const { FormRecognizerClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Validate request body
    if (!req.body || !req.body.name || !req.body.email || !req.body.jobTitle || !req.body.resume) {
        context.res = {
            status: 400,
            body: "Please pass all required fields in the request body: name, email, jobTitle, and resume."
        };
        return;
    }

    try {
        // Parse the form data
        const { name, email, jobTitle, resume } = req.body;

        // Process the resume using Form Recognizer
        const formRecognizerClient = new FormRecognizerClient(
            process.env.FORM_RECOGNIZER_ENDPOINT,
            new AzureKeyCredential(process.env.FORM_RECOGNIZER_KEY)
        );

        const poller = await formRecognizerClient.beginRecognizeContent(resume);
        const pages = await poller.pollUntilDone();

        // Extract relevant information from the resume
        const resumeText = pages.map(page => page.lines.map(line => line.text).join(" ")).join("\n");

        // Store the application in Cosmos DB
        const cosmosClient = new CosmosClient({
            endpoint: process.env.COSMOS_DB_ENDPOINT,
            key: process.env.COSMOS_DB_KEY,
        });

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

        await container.items.create(newApplication);

        context.res = {
            status: 200,
            body: "Application submitted successfully"
        };
    } catch (error) {
        context.log.error('Error processing application:', error);
        context.res = {
            status: 500,
            body: "An error occurred while processing your application"
        };
    }
};
