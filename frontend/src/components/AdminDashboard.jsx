import React, { useContext, useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file
import { ComplaintsContext } from './ComplaintsContext'; // Import ComplaintsContext
import { MessagesContext } from './MessagesContext'; // Import MessagesContext

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalComplaints } = useContext(ComplaintsContext); // Get total complaints from context
  const { messageCount } = useContext(MessagesContext); // Get message count from context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <h2>Actions</h2>
        <ul>
          <li><a href="/view-complaints">View Complaints</a></li>
          <li><a href="/messages">Messages</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <h1>Admin Dashboard</h1>
        <div className="admin-profile-box">
          <h2>Profile</h2>
          <p><strong>Name:</strong> Tamizhpriyan</p>
          <p><strong>Role:</strong> Admin of Complaint Management</p>
        </div>
        <div className="admin-stats-box">
          <h2>Total Complaints</h2>
          <p>{totalComplaints}</p>
        </div>
        <div className="admin-stats-box">
          <h2>Total Messages</h2>
          <p>{messageCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
