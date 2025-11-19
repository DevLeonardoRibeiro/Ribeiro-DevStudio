import React, { useState, useEffect } from 'react';
import './ProjectBanner.css';

const ProjectBanner = ({ images, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (images && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="project-banner">
      <img
        src={images[currentIndex]}
        alt= "Imagens de Projeto"
        style={{ display: 'none' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      <div
        className="project-banner-image"
        style={{ backgroundImage: loaded ? `url(${images[currentIndex]})` : 'none' }}
      >
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={prevImage}>{'<'}</button>
            <button className="carousel-btn next" onClick={nextImage}>{'>'}</button>
            <div className={`carousel-indicators ${isDarkMode ? 'dark-mode' : ''}`}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectBanner;
