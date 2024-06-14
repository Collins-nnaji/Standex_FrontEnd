import jsPDF from 'jspdf';

const PDFGenerator = (prompt, learningPlan, topic) => {
    const doc = new jsPDF();

    // Set the title font and size
    doc.setFontSize(18);
    doc.text(topic, 10, 10);

    // Set a smaller font size for the body text
    doc.setFontSize(12);

    // Add the full prompt section
    doc.text('Full Prompt:', 10, 30);
    const splitPrompt = doc.splitTextToSize(prompt, 180);
    doc.text(splitPrompt, 10, 40);

    // Add some space before the learning plan
    doc.addPage();
    doc.text('Generated Learning Plan:', 10, 10);
    const splitLearningPlan = doc.splitTextToSize(learningPlan, 180);
    doc.text(splitLearningPlan, 10, 20);

    return doc.output('blob');
};

export default PDFGenerator;
