import React from 'react';

const TechCard = ({ title, description }) => {
  return (
    <div className="tech-card">
      <h3 className="tech-card-title">{title}</h3>
      <p className="tech-card-description">{description}</p>
    </div>
  );
};

export default TechCard;
