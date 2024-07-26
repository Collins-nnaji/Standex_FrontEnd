import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'Standexdigital@01') {
      onAuthenticate(true);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="password">Enter Admin Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Auth;
