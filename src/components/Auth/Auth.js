import React, { useState } from 'react';
import './Auth.css';  // Create this file if you need to style the auth component

const Auth = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'yourpassword' with the actual password you want to use
    if (password === 'Standexdigital@01') {
      onAuthenticate(true);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Enter Admin Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
