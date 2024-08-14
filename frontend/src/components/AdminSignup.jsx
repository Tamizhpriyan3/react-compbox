import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';
import './AdminSignup.css'; // Import the CSS file

const AdminSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send the signup data to the backend
      await axios.post('http://localhost:8080/admin/signup', { username, password });
      setMessage('Admin account created successfully!');
      // Optionally, navigate to the login page after signup
      setTimeout(() => {
        navigate('/admin-login');
      }, 2000);
    } catch (error) {
      setMessage('Signup failed. Please try again.');
    }

    // Reset fields
    setUsername('');
    setPassword('');

    // Clear message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="signup-container">
      <h2>Admin Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label htmlFor="signup-username">Username:</label>
          <input
            type="text"
            id="signup-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AdminSignup;
