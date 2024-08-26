import jsPDF from 'jspdf';

const PDFGenerator = (name, feature, gptResponse) => {
  const doc = new jsPDF();

  // Set default font
  doc.setFont('helvetica');

  // Add a styled header
  doc.setFillColor(41, 128, 185); // A nice blue color
  doc.rect(0, 0, 210, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(feature, 10, 25);

  // Add user's name
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Prepared for: ${name}`, 10, 45);

  // Add the GPT response
  doc.setTextColor(0, 0, 0); // Reset text color to black
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Generated ${feature}:`, 10, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  // Split GPT response into lines and add to PDF
  const contentLines = doc.splitTextToSize(gptResponse, 190);
  let yPosition = 70;

  contentLines.forEach(line => {
    if (yPosition > 280) {
      doc.addPage();
      yPosition = 20;
    }
    doc.text(line, 10, yPosition);
    yPosition += 7;
  });

  // Add page numbers
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10);
  }

  // Return the blob
  return doc.output('blob');
};

export default PDFGenerator;