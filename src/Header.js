import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

function Header({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const debounceTimer = useRef(null);

  // Sync searchQuery with URL search param when on portfolio page
  useEffect(() => {
    if (location.pathname === '/portfolio') {
      const searchParams = new URLSearchParams(location.search);
      const searchParam = searchParams.get('search') || '';
      setSearchQuery(searchParam);
    }
  }, [location.pathname, location.search]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Clear previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer for 1 seconds
    debounceTimer.current = setTimeout(() => {
      if (value.trim()) {
        navigate(`/portfolio?search=${encodeURIComponent(value.trim())}`);
      } else {
        navigate('/portfolio');
      }
    }, 1000);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      if (searchQuery.trim()) {
        navigate(`/portfolio?search=${encodeURIComponent(searchQuery.trim())}`);
      } else {
        navigate('/portfolio');
      }
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-left">
          <button className="menu-button" onClick={toggleMenu}>
            <div className="grid-icon">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
        <div className="header-center">
          <Link to="/">
            <img src={isDarkMode ? "/logo - claro.png" : "/logo - escuro.png"} alt="Logo" className="header-logo" />
          </Link>
          <div className="toggles-container">
            <div className="theme-toggle-container">
              <FaSun className="sun-icon" />
              <button className="theme-toggle" onClick={toggleDarkMode}>
                <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}></div>
              </button>
              <FaMoon className="moon-icon" />
            </div>
            <div className="language-toggle">
              <span onClick={() => setIsPortuguese(true)} className={isPortuguese ? 'active' : ''}>PT</span>
              <span className="separator">|</span>
              <span onClick={() => setIsPortuguese(false)} className={!isPortuguese ? 'active' : ''}>EN</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <Link to="/" className="nav-link">{isPortuguese ? 'Home' : 'Home'}</Link>
            <Link to="/sobre" className="nav-link">{isPortuguese ? 'Sobre' : 'About'}</Link>
            <Link to="/portfolio" className="nav-link">{isPortuguese ? 'Portfolio' : 'Portfolio'}</Link>
            <Link to="/orcamento" className="nav-link">{isPortuguese ? 'Orçamento' : 'Quote'}</Link>
          </nav>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder={isPortuguese ? "Buscar..." : "Search..."}
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
            className="search-input"
            autoFocus={location.pathname === '/portfolio'}
          />
        </div>
      </div>
      <nav className={`header-nav-mobile ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>{isPortuguese ? 'Home' : 'Home'}</Link>
        <Link to="/sobre" className="nav-link" onClick={toggleMenu}>{isPortuguese ? 'Sobre' : 'About'}</Link>
        <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>{isPortuguese ? 'Portfolio' : 'Portfolio'}</Link>
        <Link to="/orcamento" className="nav-link" onClick={toggleMenu}>{isPortuguese ? 'Orçamento' : 'Quote'}</Link>
      </nav>
    </header>
  );
}

export default Header;
