// src/components/ViewComplaints.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewComplaint.css'; // Import CSS for styling

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('http://localhost:8080/form/get');
        console.log(response.data); // Log the data received from the server
        setComplaints(response.data);
      } catch (err) {
        console.error(err); // Log the error
        setError(err.response?.data?.message || 'Error fetching complaints.'); // Improved error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchComplaints();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Add a class for styling
  }

  if (error) {
    return <div className="error">{error}</div>; // Add a class for styling
  }

  const handleApprove = (id) => {
    // Add logic to handle approval of the complaint
    console.log(`Approved complaint with ID: ${id}`);
  };

  const handleReject = (id) => {
    // Add logic to handle rejection of the complaint
    console.log(`Rejected complaint with ID: ${id}`);
  };

  return (
    <div className="view-complaints-container">
      <h1>View Complaints</h1>
      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <div className="complaints-list">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="complaint-item">
              <h2>{complaint.name} (Roll No: {complaint.rollNumber})</h2>
              <p><strong>Department:</strong> {complaint.department}</p>
              <p><strong>Year of Study:</strong> {complaint.yearOfStudying}</p>
              <p><strong>Email:</strong> {complaint.email}</p>
              <p><strong>Date:</strong> {new Date(complaint.date).toLocaleDateString()}</p>
              <p><strong>Reason:</strong> {complaint.reason}</p>
              <p><strong>Action Required:</strong> {complaint.actionRequired}</p>
              <p><strong>Troublemaker 1:</strong> {complaint.troublemaker1}</p>
              <p><strong>Troublemaker 2:</strong> {complaint.troublemaker2}</p>
              <p><strong>GPS Location:</strong> {complaint.gpsLocation}</p>
              <div className="complaint-actions">
                <button onClick={() => handleApprove(complaint.id)}>Approve</button>
                <button onClick={() => handleReject(complaint.id)}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewComplaints;
