import React from 'react';

const Section = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
