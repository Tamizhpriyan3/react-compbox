import React from 'react';
import './Section.css';

const Section = ({ title, description, image, reverse }) => {
  return (
    <section className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="section-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default Section;
