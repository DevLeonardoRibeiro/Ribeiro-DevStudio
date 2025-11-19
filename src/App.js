import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Projeto1 from './pages/Projeto1';
import Projeto2 from './pages/Projeto2';
import Projeto3 from './pages/Projeto3';
import Projeto4 from './pages/Projeto4';
import Orcamento from './pages/Orcamento';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPortuguese, setIsPortuguese] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/sobre" element={<Sobre isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/portfolio" element={<Portfolio isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/portfolio/projeto1" element={<Projeto1 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/portfolio/projeto2" element={<Projeto2 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/portfolio/projeto3" element={<Projeto3 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/portfolio/projeto4" element={<Projeto4 isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
          <Route path="/orcamento" element={<Orcamento isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />} />
        </Routes>
        <Footer isPortuguese={isPortuguese} />
        <ScrollToTop />
        <WhatsAppButton isPortuguese={isPortuguese} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
