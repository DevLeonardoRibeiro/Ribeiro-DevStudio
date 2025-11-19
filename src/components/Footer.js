import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import '../App.css';

const Footer = ({ isPortuguese }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo - claro.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <h3>{isPortuguese ? "Links Úteis" : "Useful Links"}</h3>
          <ul>
            <li><Link to="/sobre">{isPortuguese ? "Sobre" : "About"}</Link></li>
            <li><Link to="/portfolio">{isPortuguese ? "Portfólio" : "Portfolio"}</Link></li>
            <li><Link to="/orcamento">{isPortuguese ? "Orçamento" : "Quote"}</Link></li>
          </ul>
        </div>
        <div className="footer-about">
          <p>{isPortuguese ? "Somos uma equipe dedicada a transformar ideias em soluções digitais inovadoras, com foco em qualidade e criatividade." : "We are a team dedicated to transforming ideas into innovative digital solutions, with a focus on quality and creativity."}</p>
        </div>
        <div className="footer-social-section">
          <h4 className="social">Minhas Redes</h4>
          <div className="footer-social">
            <a href="https://wa.me/5513996832036" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/ribeiro_devstudio?igsh=MTdxODBvb2d4eDdzZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/devleonardoribeiro/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DevLeonardoRibeiro?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ribeiro DevStudio. {isPortuguese ? "Todos os direitos reservados." : "All rights reserved."}</p>
      </div>
    </footer>
  );
};

export default Footer;
