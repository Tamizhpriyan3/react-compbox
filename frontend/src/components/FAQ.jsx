import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Online Complaint Management System?",
      answer: "An online portal that helps manage online customer complaints. It provides a comprehensive platform to resolve these complaints with ease."
    },
    {
      question: "Why is a complaint management system important?",
      answer: "The web complaint management software allows the user to record the complaint and loads it to the complaints database. It offers a strategic method for online lodging and tracking customer concerns and issues."
    },
    {
      question: "How much time does a complaint management system take to develop?",
      answer: "The time to develop a complaint management system can vary depending on the complexity of the features and the size of the team working on the project."
    },
    {
      question: "How much does it cost to develop a complaint management system?",
      answer: "The cost to develop a complaint management system depends on the requirements, features, and development time involved. Contact a service provider for a detailed estimate."
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Online Complaint Management System <span className="highlight">FAQs</span></h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
