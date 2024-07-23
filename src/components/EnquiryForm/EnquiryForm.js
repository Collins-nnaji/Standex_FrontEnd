import React, { useState } from 'react';
import axios from 'axios';
import './EnquiryForm.css';

const EnquiryForm = ({ courseName, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tech-elevate-backend.vercel.app/api/send-brochure', { name, email, courseName });
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending brochure:', error);
    }
  };

  if (submitted) {
    return (
      <div className="enquiry-form">
        <h3>Thank you!</h3>
        <p>The brochure has been sent to your email.</p>
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
      <button type="submit">Send Brochure</button>
    </form>
  );
};

export default EnquiryForm;
