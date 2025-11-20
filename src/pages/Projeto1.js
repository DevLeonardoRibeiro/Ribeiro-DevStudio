import React, { useEffect } from 'react';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import ProjectBanner from '../components/ProjectBanner';
import '../App.css';
import { Helmet } from 'react-helmet-async';

function Projeto1({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Portfolio' : 'Portfolio', link: '/portfolio' },
    { label: isPortuguese ? 'Projeto 1' : 'Project 1', link: '/portfolio/projeto1' }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Projeto 1 - Ribeiro DevStudio" : "Project 1 - Ribeiro DevStudio"}</title>
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/ti-portfolio.jpg" alt="imagem futurista TI" title={isPortuguese ? "Projeto 1" : "Project 1"} subtitle={isPortuguese ? "Aplicativo Web em SPA." : "Web Application in SPA."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <div className="projeto-content">
          <h1>{isPortuguese ? "Desenvolvimento Web - Empresa ANG Engenharia Laudos & Projetos" : "Project 1 - Web Development"}</h1>
          <p>{isPortuguese ? "Esse projeto foi desenvolvido para a empresa ANG Engenharia Laudos & Projetos. Utilizando React e suas principais bibliotecas, foi criado um aplicativo web no modelo SPA (Single Page Application), proporcionando ao usuário a sensação de navegação contínua dentro de uma única página, com transições rápidas e experiência fluida. A aplicação foi construída com React, React Router, CSS3, HTML5, JavaScript, entre outras ferramentas, garantindo alto desempenho e organização do código. Além do desenvolvimento técnico, também foi elaborada uma identidade visual personalizada, alinhada ao posicionamento da marca e às necessidades do cliente." : "This project was developed for ANG Engenharia Laudos & Projetos company. Using React and its main libraries, a web application was created in the SPA (Single Page Application) model, providing the user with the feeling of continuous navigation within a single page, with fast transitions and fluid experience. The application was built with React, React Router, CSS3, HTML5, JavaScript, among other tools, ensuring high performance and code organization. In addition to technical development, a personalized visual identity was also developed, aligned with the brand's positioning and the client's needs."}</p>
        </div>
        <ProjectBanner images={['/images/pagina-ang/blog-ang.png', '/images/pagina-ang/capa-ang.png', '/images/pagina-ang/orcamento-ang.png', '/images/pagina-ang/servicos-ang.png']} />
      </main>
    </div>
  );
}

export default Projeto1;
