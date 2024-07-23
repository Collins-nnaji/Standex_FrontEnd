import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = ({ courseName, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Capture user details and store them in local storage
    const userDetails = {
      name,
      email,
      courseName,
      timestamp: new Date().toISOString(),
    };

    const existingEntries = JSON.parse(localStorage.getItem('enquiries')) || [];
    existingEntries.push(userDetails);
    localStorage.setItem('enquiries', JSON.stringify(existingEntries));

    // Open the brochure PDF in a new tab
    const pdfUrl = `/brochures/${courseName.replace(/\s+/g, '%20')}.pdf`;
    window.open(pdfUrl, '_blank');

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="enquiry-form">
        <h3>Thank you!</h3>
        <p>The brochure is opening now.</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <h3>Request Brochure for {courseName}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">View Brochure</button>
    </form>
  );
};

export default EnquiryForm;
