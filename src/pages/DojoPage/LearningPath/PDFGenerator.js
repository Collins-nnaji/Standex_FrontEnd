import jsPDF from 'jspdf';

const PDFGenerator = (learningPlan) => {
    const doc = new jsPDF();

    doc.text('Learning Plan', 10, 10);
    doc.text(learningPlan, 10, 20);

    return doc.output('blob');
};

export default PDFGenerator;
