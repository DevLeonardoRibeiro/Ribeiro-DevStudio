import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Breadcrumb = ({ path, isPortuguese }) => {
  return (
    <div className="breadcrumb">
      {path.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="breadcrumb-separator">-</span>}
          {index === path.length - 1 ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <Link to={item.link} className="breadcrumb-link">{item.label}</Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
