import React, { useState, useContext } from 'react';
import './FormComponent.css';
import { ComplaintsContext } from './ComplaintsContext';
import { useNavigate } from 'react-router-dom';
import check from '../assest/check.png'; // Make sure the path is correct
import axios from 'axios'; // Import axios for making API calls

const FormComponent = () => {
  const { incrementComplaints } = useContext(ComplaintsContext);
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    department: '',
    yearOfStudying: '',
    tutorName: '',
    hodName: '',
    mobileNumber: '',
    email: '',
    date: '',
    reason: '',
    actionRequired: '',
    troublemaker1: '',
    troublemaker2: '',
    gpsLocation: '',
    images: [],
    termsAgreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAgreed: e.target.checked });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({ ...formData, gpsLocation: `${latitude}, ${longitude}` });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert('Please agree to the Terms and Conditions before submitting.');
      return;
    }

    // Prepare form data for submission
    const payload = {
      ...formData,
      images: formData.images.map(file => file.name), // Store only file names for now
    };

    try {
      // Send the data to the backend API
      await axios.post('http://localhost:8080/form', payload);
      incrementComplaints(); // Increment the complaint count
      setIsSubmitted(true); // Update submission state
      navigate('/confirmation', { state: { formData } }); // Optionally navigate to confirmation page
    } catch (error) {
      console.error('Error submitting the complaint:', error);
      alert('There was an error submitting your complaint. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="submission-container">
        <h1>Thank You!</h1>
        <p>Your complaint has been submitted successfully.</p>
        <img src={check} alt="Thank You" className="thank-you-image" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="us-h1">
        <h1>User Information</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Form fields go here (same as before) */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select 
            id="department" 
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className="form-control"
            required
          >
            <option value="" disabled>Select Department</option>
            <option value="cse">CSE</option>
            <option value="it">IT</option>
            <option value="iot">IoT</option>
            <option value="aiml">AIML</option>
            <option value="aids">AIDS</option>
            <option value="cs">CS</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="yearOfStudying">Year of Studying:</label>
          <select 
            id="yearOfStudying" 
            name="yearOfStudying"
            value={formData.yearOfStudying}
            onChange={handleInputChange}
            className="form-control"
            required
          >
            <option value="" disabled>Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tutor's Name:</label>
          <input
            type="text"
            name="tutorName"
            value={formData.tutorName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>HOD's Name:</label>
          <input
            type="text"
            name="hodName"
            value={formData.hodName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
       
        <div className="form-group">
          <h1>Complaint Information</h1>
          <label>Complain Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            required
            className="form-control"
          >
            <option value="" disabled>Select a reason</option>
            <option value="Ragging">Ragging</option>
            <option value="Harassment">Harassment</option>
            <option value="Drug Abuse">Drug Abuse</option>
            <option value="Cultural Activities">Cultural Activities</option>
            <option value="Scholarship Availability">Scholarship Availability</option>
            <option value="Fee Payment Issues">Fee Payment Issues</option>
            <option value="Security Concerns">Security Concerns</option>
            <option value="Sports Facilities">Sports Facilities</option>
            <option value="Lab Equipment">Lab Equipment</option>
            <option value="Exam Scheduling">Exam Scheduling</option>
            <option value="Transport Facilities">Transport Facilities</option>
            <option value="Counseling Services">Counseling Services</option>
            <option value="Administrative Support">Administrative Support</option>
            <option value="Classroom Facilities">Classroom Facilities</option>
            <option value="Canteen Food Quality">Canteen Food Quality</option>
            <option value="Hostel Maintenance">Hostel Maintenance</option>
            <option value="Internet Connectivity">Internet Connectivity</option>
            <option value="Library Access Issues">Library Access Issues</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Troublemaker 1:</label>
          <input
            type="text"
            name="troublemaker1"
            value={formData.troublemaker1}
            onChange={handleInputChange}
            placeholder="person1"
            required
          />
        </div>

        <div className="form-group">
          <label>Troublemaker 2:</label>
          <input
            type="text"
            name="troublemaker2"
            value={formData.troublemaker2}
            onChange={handleInputChange}
            placeholder="person2"
            required
          />
        </div>

        <div className="form-group">
          <label>What action needs to be taken to resolve this issue?</label>
          <textarea
            name="actionRequired"
            value={formData.actionRequired}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>GPS Location:</label>
          <input
            type="text"
            name="gpsLocation"
            value={formData.gpsLocation}
            onChange={handleInputChange}
            readOnly
          />
          <button type="button" onClick={handleGetLocation}>
            Get Current Location
          </button>
        </div>
        <div className="form-group">
          <label>Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
          />
        </div>
      
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.termsAgreed}
              onChange={handleCheckboxChange}
              required
            />
            All the data I submitted is truthful, and I am responsible for that.
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
