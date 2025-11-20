import React, { useEffect } from 'react';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import ProjectBanner from '../components/ProjectBanner';
import { Helmet } from 'react-helmet-async';
import '../App.css';

function Projeto4({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Portfolio' : 'Portfolio', link: '/portfolio' },
    { label: isPortuguese ? 'Projeto 4' : 'Project 4', link: '/portfolio/projeto4' }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Projeto 4 - Ribeiro DevStudio" : "Project 4 - Ribeiro DevStudio"}</title>
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner image="/images/ti-portfolio.jpg" alt="imagem futurista TI" title={isPortuguese ? "Projeto 4" : "Project 4"} subtitle={isPortuguese ? "Apresentação em PowerPoint da empresa ANG Engenharia." : "PowerPoint Presentation for ANG Engenharia company."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <div className="projeto-content">
          <h1>{isPortuguese ? "Projeto 4 - Apresentação em PowerPoint da empresa ANG Engenharia" : "Project 4 - PowerPoint Presentation for ANG Engenharia company"}</h1>
          <p>{isPortuguese ? "Esta apresentação foi elaborada em PowerPoint para a empresa ANG Engenharia Laudos & Projetos, apresenta links externos para: WhatsApp e Instagram. A uma aba de serviços que usa link interno para navegar no próprio slide. Esse slide usa a transição queridinha do momento: a Transformação. Dando fluidez e modernidade no Slide." : "This presentation was developed in PowerPoint for ANG Engenharia Laudos & Projetos company, it presents external links to: WhatsApp and Instagram. A services tab that uses internal link to navigate within the slide itself. This slide uses the favorite transition of the moment: Transformation. Giving fluidity and modernity to the Slide."}</p>
        </div>
        <ProjectBanner images={['/images/apresentacao-ang/capa-apresentacao-ang.png', '/images/apresentacao-ang/clientes-ang.png', '/images/apresentacao-ang/servicos-ang.png', '/images/apresentacao-ang/valores-ang.png']} />
      </main>
    </div>
  );
}

export default Projeto4;
