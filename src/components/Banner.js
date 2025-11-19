import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

const Banner = ({ images, image, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const bannerImages = images || (image ? [image] : []);
  const imageSrc = Array.isArray(bannerImages) ? bannerImages[currentIndex] : bannerImages;

  useEffect(() => {
    if (Array.isArray(images) && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  const nextImage = () => {
    if (Array.isArray(bannerImages) && bannerImages.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }
  };

  const prevImage = () => {
    if (Array.isArray(bannerImages) && bannerImages.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
    }
  };

  return (
    <div className="banner" style={{ backgroundImage: loaded ? `url(${imageSrc})` : 'none' }}>
      <img
        src={imageSrc}
        alt="Banner"
        style={{ display: 'none' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      {Array.isArray(bannerImages) && bannerImages.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevImage}>{'<'}</button>
          <button className="carousel-btn next" onClick={nextImage}>{'>'}</button>
          <div className="carousel-indicators">
            {bannerImages.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </>
      )}
      <div className="banner-content">
        {title && <motion.h1 className="banner-title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>{title}</motion.h1>}
        {subtitle && <motion.p className="banner-subtitle" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}>{subtitle}</motion.p>}
      </div>
    </div>
  );
};

export default Banner;
