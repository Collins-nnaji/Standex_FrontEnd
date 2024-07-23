import React, { useState } from 'react';
import EnquiryLogs from '../../components/EnquiryLogs/EnquiryLogs';
import Auth from '../../components/Auth/Auth';
import './AdminPage.css';  // Create this file if you need to style the admin page

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticate = (authStatus) => {
    setAuthenticated(authStatus);
  };

  return (
    <div className="admin-page">
      {!authenticated ? (
        <Auth onAuthenticate={handleAuthenticate} />
      ) : (
        <>
          <h1>Admin Dashboard</h1>
          <EnquiryLogs />
        </>
      )}
    </div>
  );
};

export default AdminPage;
