import React, { useEffect, useState } from 'react';
import './EnquiryLogs.css';  // Create this file if you need to style the logs

const EnquiryLogs = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const storedEnquiries = JSON.parse(localStorage.getItem('enquiries')) || [];
    setEnquiries(storedEnquiries);
  }, []);

  return (
    <div>
      <h2>Enquiry Logs</h2>
      {enquiries.length > 0 ? (
        <ul>
          {enquiries.map((enquiry, index) => (
            <li key={index}>
              <p>Name: {enquiry.name}</p>
              <p>Email: {enquiry.email}</p>
              <p>Course: {enquiry.courseName}</p>
              <p>Timestamp: {enquiry.timestamp}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No enquiries logged.</p>
      )}
    </div>
  );
};

export default EnquiryLogs;
