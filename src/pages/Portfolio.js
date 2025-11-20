import React, { useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import PortfolioCard from '../components/PortfolioCard';
import '../App.css';

function Portfolio({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      to: "/portfolio/projeto1",
      title: isPortuguese ? "Site de Engenharia Civil" : "Civil Engineering Website",
      description: isPortuguese ? "Site institucional elaborado em React para a empresa ANG Engenharia Laudos & Projetos." : "Institutional website developed in React for ANG Engenharia Laudos & Projetos company.",
      image: "/images/pagina-ang/capa-ang.png",
      alt: isPortuguese ? "Pagina inicial da empresa ANG Engenharia" : "Homepage of ANG Engenharia company",
      animationClass: "slide-in-left",
      searchText: "ANG Engenharia Laudos & Projetos site institucional React"
    },
    {
      id: 2,
      to: "/portfolio/projeto2",
      title: isPortuguese ? "Site de Engenharia Civil em Fase de Desenvolvimento" : "Civil Engineering Website",
      description: isPortuguese ? "Site institucional criado para a empresa F L Barbosa Engenharia em react." : "Institutional website created for F L Barbosa Engenharia company in React.",
      image: "/images/pagina-flb/capa-flb.png",
      alt: isPortuguese ? "Pagina inicial da empresa F L Barbosa Engenharia" : "Homepage of F L Barbosa Engenharia company",
      animationClass: "slide-in-right",
      searchText: "F L Barbosa Engenharia site institucional React desenvolvimento"
    },
    {
      id: 3,
      to: "/portfolio/projeto3",
      title: isPortuguese ? "Apresentação em PowerPoint da empresa F L Barbosa Engenharia" : "PowerPoint Presentation for F L Barbosa Engenharia company",
      description: isPortuguese ? "Apresentação em PowerPoint, dinâmico e intuitivo para a empresa F L Barbosa." : "Dynamic and intuitive PowerPoint presentation for F L Barbosa company.",
      image: "/images/apresentacao-flb/capa-apresentacao-flb.png",
      alt: isPortuguese ? "Capa da apresentação em slide" : "Slide presentation cover",
      animationClass: "slide-in-left",
      searchText: "F L Barbosa Engenharia apresentação PowerPoint dinâmico intuitivo"
    },
    {
      id: 4,
      to: "/portfolio/projeto4",
      title: isPortuguese ? "Apresentação em PowerPoint da empresa ANG Engenharia" : "PowerPoint Presentation for ANG Engenharia company",
      description: isPortuguese ? "Apresentação em PowerPoint, dinâmico e intuitivo para a empresa ANG Engenharia." : "Dynamic and intuitive PowerPoint presentation for ANG Engenharia company.",
      image: "/images/apresentacao-ang/capa-apresentacao-ang.png",
      alt: isPortuguese ? "Capa da apresentação em slide" : "Slide presentation cover",
      animationClass: "slide-in-right",
      searchText: "ANG Engenharia apresentação PowerPoint dinâmico intuitivo"
    }
  ];

  const filteredProjects = searchQuery
    ? projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.searchText.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Portfolio' : 'Portfolio', link: '/portfolio' }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Portfolio - Ribeiro DevStudio" : "Portfolio - Ribeiro DevStudio"}</title>
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/data-portfolio.avif" alt="Imagem de um servidor" title={isPortuguese ? "Portfolio" : "Portfolio"} subtitle={isPortuguese ? "Veja nossos trabalhos." : "See our work."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        {searchQuery && (
          <div className="search-results">
            <h2>{isPortuguese ? `Resultados para "${searchQuery}"` : `Results for "${searchQuery}"`}</h2>
            <p>{isPortuguese ? `${filteredProjects.length} projeto(s) encontrado(s)` : `${filteredProjects.length} project(s) found`}</p>
          </div>
        )}
        <div className="portfolio-cards">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              to={project.to}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              animationClass={project.animationClass}
            />
          ))}
        </div>
        {searchQuery && filteredProjects.length === 0 && (
          <div className="no-results">
            <p>{isPortuguese ? `Nenhum projeto encontrado para "${searchQuery}".` : `No projects found for "${searchQuery}".`}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Portfolio;
