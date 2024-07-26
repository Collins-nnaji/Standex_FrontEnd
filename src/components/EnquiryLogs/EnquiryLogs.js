import React, { useEffect, useState } from 'react';
import './EnquiryLogs.css';

const EnquiryLogs = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/enquiries`);
        const data = await response.json();
        setEnquiries(data);
        console.log('Fetched enquiries:', data); // Debugging line
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    };

    fetchEnquiries();
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
