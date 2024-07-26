import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = ({ courseName, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      name,
      email,
      courseName,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      console.log('Enquiry submission response:', response); // Debugging line

      if (response.ok) {
        setSubmitted(true);
        const pdfUrl = `/brochures/Tech_Elevate_${courseName.replace(/\s+/g, '_')}.pdf`;
        window.open(pdfUrl, '_blank');
      } else {
        console.error('Error saving enquiry:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
