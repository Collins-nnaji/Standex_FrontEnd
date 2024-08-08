import jsPDF from 'jspdf';

const PDFGenerator = (name, prompt, learningPlan, topic) => {
  const doc = new jsPDF();

  // Set the title font, size, and style
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(40, 40, 40);
  doc.text(topic, 10, 20);

  // Add user's name
  doc.setFontSize(14);
  doc.text(`Prepared for: ${name}`, 10, 30);

  // Add a divider line
  doc.setLineWidth(0.5);
  doc.setDrawColor(200, 200, 200);
  doc.line(10, 35, 200, 35);

  // Set a smaller font size for the body text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  // Add the full prompt section with a background color
  doc.setFillColor(245, 245, 245); // Light gray color
  doc.rect(10, 40, 190, 10, 'F'); // Draw filled rectangle
  doc.setTextColor(0, 0, 0); // Black text color
  doc.text('Full Prompt:', 12, 48);

  // Split and add the prompt text
  const splitPrompt = doc.splitTextToSize(prompt, 180);
  let verticalOffset = 58;

  splitPrompt.forEach(line => {
    if (verticalOffset > 280) { // Check if the vertical offset exceeds the page height
      doc.addPage();
      verticalOffset = 20; // Reset vertical offset for new page
    }
    doc.text(line, 10, verticalOffset);
    verticalOffset += 10;
  });

  // Add some space before the learning plan
  doc.addPage();

  // Add a header for the learning plan
  doc.setFontSize(16);
  doc.setTextColor(40, 40, 40);
  doc.text(`Generated ${topic}:`, 10, 20);

  // Add the learning plan text
  const splitLearningPlan = doc.splitTextToSize(learningPlan, 180);
  verticalOffset = 30;

  splitLearningPlan.forEach(line => {
    if (verticalOffset > 280) { // Check if the vertical offset exceeds the page height
      doc.addPage();
      verticalOffset = 20; // Reset vertical offset for new page
    }
    doc.text(line, 10, verticalOffset);
    verticalOffset += 10;
  });

  // Generate the file name
  const fileName = `${name}_${topic.replace(/\s/g, '_')}.pdf`;

  // Return the blob
  return doc.output('blob', fileName);
};

export default PDFGenerator;