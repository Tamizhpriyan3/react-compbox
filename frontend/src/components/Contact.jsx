import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import icon from '../assest/icon.png'; // Ensure the path is correct
import check from '../assest/check.png'; // Path to the check image
import { MessagesContext } from './MessagesContext'; // Import MessagesContext
import axios from 'axios';

const Contact = () => {
  const { setMessageCount } = useContext(MessagesContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Increment the message count
    setMessageCount(prevCount => prevCount + 1);

    try {
      // Send data to the backend
      await axios.post('http://localhost:8080/api/contact', formData);
      // Set submission state to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting contact message:', error);
      alert('Failed to submit your message. Please try again.');
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/'); // Redirect to the dashboard
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [isSubmitted, navigate]);

  if (isSubmitted) {
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
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="form-icon">
          <img src={icon} alt="Contact Icon" />
        </div>
        <h2>CONTACT US</h2>
        <p>Please fill this form in a decent manner</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <span className="required-dot">*</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
