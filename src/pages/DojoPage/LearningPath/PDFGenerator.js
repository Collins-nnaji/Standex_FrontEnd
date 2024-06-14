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
    doc.text(prompt, 10, 40, { maxWidth: 180 });

    // Add the generated learning plan section
    doc.text('Generated Learning Plan:', 10, 80);
    doc.text(learningPlan, 10, 90, { maxWidth: 180 });

    return doc.output('blob');
};

export default PDFGenerator;
