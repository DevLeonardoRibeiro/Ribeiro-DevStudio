import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ to, title, description, image, alt, animationClass }) => {
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Link to={to} className="portfolio-card-link">
      <div ref={cardRef} className={`portfolio-card ${animationClass || ''}`}>
        <div className="card-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <img src={image} alt={alt} className="card-image" loading="lazy" />
      </div>
    </Link>
  );
};

export default PortfolioCard;
