import jsPDF from 'jspdf';

const PDFGenerator = (prompt, learningPlan, topic) => {
    const doc = new jsPDF();

    // Set the title font, size, and style
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text(topic, 10, 20);

    // Set a smaller font size for the body text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);

    // Add the full prompt section with a background color
    doc.setFillColor(230, 230, 250); // Light lavender color
    doc.rect(10, 30, 190, 10, 'F'); // Draw filled rectangle
    doc.setTextColor(0, 0, 0); // Black text color
    doc.text('Full Prompt:', 12, 38);

    // Split and add the prompt text
    doc.setFontSize(12);
    const splitPrompt = doc.splitTextToSize(prompt, 180);
    doc.text(splitPrompt, 10, 50);

    // Add some space before the learning plan
    doc.addPage();
    
    // Add a header for the learning plan
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text('Generated Learning Plan:', 10, 20);

    // Add the learning plan text with bullet points
    doc.setFontSize(12);
    const splitLearningPlan = doc.splitTextToSize(learningPlan, 180);
    let verticalOffset = 30;
    splitLearningPlan.forEach((line, index) => {
        doc.text(`• ${line}`, 10, verticalOffset);
        verticalOffset += 10;
    });

    return doc.output('blob');
};

export default PDFGenerator;
