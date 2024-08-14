import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const correctUsername = 'Tamizh';
  const correctPassword = '1234';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setMessage('Welcome, Captain');
      setTimeout(() => {
        navigate('/admin-dashboard');
      }, 100); // Navigate to the admin dashboard after 100 milliseconds
    } else {
      setMessage('Wrong name and password, you cannot enter in');
    }

    // Reset username and password
    setUsername('');
    setPassword('');

    // Clear the message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className={`message ${message === 'Welcome, Captain' ? 'success' : ''}`}>{message}</p>}

      <p>
        Don't have an account? <Link to="/admin-signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
