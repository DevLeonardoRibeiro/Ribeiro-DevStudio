import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import ProjectBanner from '../components/ProjectBanner';
import '../App.css';

function Projeto3({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Portfolio' : 'Portfolio', link: '/portfolio' },
    { label: isPortuguese ? 'Projeto 3' : 'Project 3', link: '/portfolio/projeto3' }
  ];

  return (
    <div className="App">
      <HelmetProvider>
        <title>{isPortuguese ? "Projeto 3 - Ribeiro DevStudio" : "Project 3 - Ribeiro DevStudio"}</title>
      </HelmetProvider>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner image="/images/ti-portfolio.jpg" alt="imagem futurista" title={isPortuguese ? "Projeto 3" : "Project 3"} subtitle={isPortuguese ? "Detalhes do terceiro projeto." : "Details of the third project."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <div className="projeto-content">
          <h1>{isPortuguese ? "Projeto 3 - Apresentação em PPT" : "Project 3 - Business System"}</h1>
          <p>{isPortuguese ? "Esta apresentação foi elaborada em PowerPoint para a empresa F L Barbosa Engenharia, apresenta links externos para: WhatsApp e Instagram. A uma aba de serviços que usa link interno para navegar no próprio slide. Esse slide usa a transição queridinha do momento: a Transformação. Dando fluidez e modernidade no Slide." : "This presentation was developed in PowerPoint for F L Barbosa Engenharia company, it presents external links to: WhatsApp and Instagram. A services tab that uses internal link to navigate within the slide itself. This slide uses the favorite transition of the moment: Transformation. Giving fluidity and modernity to the Slide."}</p>
        </div>
        <ProjectBanner images={['/images/apresentacao-flb/capa-apresentacao-flb.png', '/images/apresentacao-flb/historia-flb.png', '/images/apresentacao-flb/portfolio-flb.png', '/images/apresentacao-flb/valores-flb.png']} />
      </main>
    </div>
  );
}

export default Projeto3;
