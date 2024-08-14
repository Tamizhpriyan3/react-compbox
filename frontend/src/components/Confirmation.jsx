import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import check from '../assest/check.png'; // Make sure the path is correct
import './Confirmation.css'; // Ensure you import the CSS file

const Confirmation = () => {
  const location = useLocation(); // Get the location object
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Get the form data passed from the FormComponent
  const { formData } = location.state || {};

  const handleNavigate = () => {
    navigate('/'); // Redirect to the Dashboard
  };

  if (!formData) {
    return (
      <div className="submission-container">
        <div className="confirmation-box">
          <h1>Thank You!</h1>
          <p>Your message has been submitted successfully.</p>
          <img src={check} alt="Thank You" className="thank-you-image" />
        </div>
      </div>
    );
  }

  return (
    <div className="submission-container">
      <div className="confirmation-box">
        <h1>Thank You!</h1>
        <p>Your complaint has been submitted successfully.</p>
        <img src={check} alt="Thank You" className="thank-you-image" />
      </div>
      
      <div className="details-box">
        <h2>Submitted Details:</h2>
        <table className="submission-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <th>Roll Number</th>
              <td>{formData.rollNumber}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{formData.department}</td>
            </tr>
            <tr>
              <th>Year of Studying</th>
              <td>{formData.yearOfStudying}</td>
            </tr>
            <tr>
              <th>Tutor's Name</th>
              <td>{formData.tutorName}</td>
            </tr>
            <tr>
              <th>HOD's Name</th>
              <td>{formData.hodName}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{formData.mobileNumber}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{formData.date}</td>
            </tr>
            <tr>
              <th>Reason</th>
              <td>{formData.reason}</td>
            </tr>
            <tr>
              <th>Troublemaker 1</th>
              <td>{formData.troublemaker1}</td>
            </tr>
            <tr>
              <th>Troublemaker 2</th>
              <td>{formData.troublemaker2}</td>
            </tr>
            <tr>
              <th>Action Required</th>
              <td>{formData.actionRequired}</td>
            </tr>
            <tr>
              <th>GPS Location</th>
              <td>{formData.gpsLocation}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="dashboard-button" onClick={handleNavigate}>Go to Dashboard</button>
    </div>
  );
};

export default Confirmation;
