import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import ProjectBanner from '../components/ProjectBanner';
import '../App.css';

function Projeto2({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Portfolio' : 'Portfolio', link: '/portfolio' },
    { label: isPortuguese ? 'Projeto 2' : 'Project 2', link: '/portfolio/projeto2' }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Projeto 2 - Ribeiro DevStudio" : "Project 2 - Ribeiro DevStudio"}</title>
        <meta name="description" content={isPortuguese ? "Projeto 2: Aplicação web desenvolvida para F L Barbosa Engenharia. Sistema em React com arquitetura multi-página e navegação clara." : "Project 2: Web application developed for F L Barbosa Engenharia. React system with multi-page architecture and clear navigation."} />
        <meta name="keywords" content={isPortuguese ? "projeto 2, F L Barbosa Engenharia, aplicação web, React, multi-página, desenvolvimento web, Ribeiro DevStudio" : "project 2, F L Barbosa Engenharia, web application, React, multi-page, web development, Ribeiro DevStudio"} />
        <meta property="og:title" content={isPortuguese ? "Projeto 2 - Ribeiro DevStudio" : "Project 2 - Ribeiro DevStudio"} />
        <meta property="og:description" content={isPortuguese ? "Aplicação Web desenvolvida para F L Barbosa Engenharia." : "Web Application developed for F L Barbosa Engenharia."} />
        <meta property="og:image" content="/images/pagina-flb/capa-flb.png" />
        <meta property="og:url" content="https://ribeirodevstudio.com/portfolio/projeto2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isPortuguese ? "Projeto 2 - Ribeiro DevStudio" : "Project 2 - Ribeiro DevStudio"} />
        <meta name="twitter:description" content={isPortuguese ? "Aplicação Web desenvolvida para F L Barbosa Engenharia." : "Web Application developed for F L Barbosa Engenharia."} />
        <meta name="twitter:image" content="/images/pagina-flb/capa-flb.png" />
        <link rel="canonical" href="https://ribeirodevstudio.com/portfolio/projeto2" />
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/ti-portfolio.jpg" alt="imagem TI" title={isPortuguese ? "Projeto 2" : "Project 2"} subtitle={isPortuguese ? "Aplicação Web." : "Details of the second project."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <div className="projeto-content">
          <h1>{isPortuguese ? "Projeto 2 - Aplicação Web" : "Project 2 - Mobile Application"}</h1>
          <p>{isPortuguese ? "Aplicativo Web desenvolvido para a empresa F L Barbosa Engenharia. O sistema foi criado em React com uma arquitetura de múltiplas páginas, oferecendo navegação clara, melhor distribuição de informações e uma experiência adaptada ao perfil corporativo da empresa." : "Web application developed for F L Barbosa Engenharia company. The system was created in React with a multi-page architecture, offering clear navigation, better information distribution, and an experience adapted to the company's corporate profile."}</p>
        </div>
        <ProjectBanner images={['/images/pagina-flb/capa-flb.png', '/images/pagina-flb/orcamento-flb.png', '/images/pagina-flb/sobre-flb.png']} />
      </main>
    </div>
  );
}

export default Projeto2;
