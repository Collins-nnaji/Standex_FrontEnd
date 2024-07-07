const { app } = require('@azure/functions');
const submitApplication = require('./functions/submitApplication');

app.setup({
    enableHttpStream: true,
});

app.http('submitApplication', {
    methods: ['POST'],
    authLevel: 'function',
    handler: submitApplication
});
