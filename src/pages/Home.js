import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import Banner from '../components/Banner';
import Section from '../components/Section';
import TechCarousel from '../components/TechCarousel';
import '../App.css';

function Home({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      title: 'React',
      description: isPortuguese ? 'Biblioteca JavaScript para construção de interfaces de usuário. Usada para criar componentes reutilizáveis e gerenciar o estado da aplicação.' : 'JavaScript library for building user interfaces. Used to create reusable components and manage application state.'
    },
    {
      title: 'CSS3',
      description: isPortuguese ? 'Linguagem de estilo para design responsivo. Usada para estilizar componentes e criar layouts adaptáveis.' : 'Styling language for responsive design. Used to style components and create adaptable layouts.'
    },
    {
      title: 'Node.js',
      description: isPortuguese ? 'Ambiente de execução JavaScript no servidor. Usado no backend para processar requisições e servir a API.' : 'JavaScript runtime environment on the server. Used in the backend to process requests and serve the API.'
    },
    {
      title: 'Express.js',
      description: isPortuguese ? 'Framework web para Node.js. Facilita a criação de APIs RESTful e gerenciamento de rotas no servidor.' : 'Web framework for Node.js. Facilitates the creation of RESTful APIs and route management on the server.'
    },
    {
      title: 'HTML5',
      description: isPortuguese ? 'Linguagem de marcação para estruturação de conteúdo web. Fornece a base semântica para páginas web modernas.' : 'Markup language for structuring web content. Provides the semantic foundation for modern web pages.'
    }
  ];

  const libraries = [
    {
      title: 'React Router',
      description: isPortuguese ? 'Biblioteca para roteamento no React. Permite navegação entre páginas sem recarregar a aplicação.' : 'Routing library for React. Allows navigation between pages without reloading the application.'
    },
    {
      title: 'Framer Motion',
      description: isPortuguese ? 'Biblioteca para animações no React. Usada para criar transições suaves e interações dinâmicas na interface.' : 'Animation library for React. Used to create smooth transitions and dynamic interactions in the interface.'
    }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Ribeiro DevStudio - Desenvolvimento Web e Software" : "Ribeiro DevStudio - Web and Software Development"}</title>
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/newyork-home.jpeg" alt="Imagem de prédio de New York." title={isPortuguese ? "Bem-vindo" : "Welcome"} subtitle={isPortuguese ? "Conheça nossos serviços." : "Discover our services."} />
      <main className="main-content">
        <Section
          title={isPortuguese ? "Tecnologias Utilizadas" : "Technologies Used"}
          subtitle={isPortuguese ? "Este site foi desenvolvido utilizando as seguintes tecnologias modernas para garantir performance, escalabilidade e uma experiência excepcional ao usuário." : "This site was developed using the following modern technologies to ensure performance, scalability, and an exceptional user experience."}
        >
          <TechCarousel technologies={technologies} />
        </Section>
        <Section
          title={isPortuguese ? "Bibliotecas Utilizadas" : "Libraries Used"}
          subtitle={isPortuguese ? "Utilizamos bibliotecas especializadas para adicionar funcionalidades avançadas e melhorar a experiência do usuário." : "We use specialized libraries to add advanced features and improve the user experience."}
        >
          <TechCarousel technologies={libraries} />
        </Section>
        <Section
          title={isPortuguese ? "Certificações Profissionais" : "Professional Certifications"}
          subtitle={isPortuguese ? "Certificações profissionais conquistadas em empresas de alta relevância, reforçando credibilidade técnica e demonstrando alinhamento com padrões reconhecidos no mercado de tecnologia." : "Professional certifications achieved in high-relevance companies, reinforcing technical credibility and demonstrating alignment with recognized standards in the technology market."}
          className="certifications-section"
        >
          <div className="certifications-grid">
            <div className="tech-card">
              <h3 className="tech-card-title">{isPortuguese ? "Diploma Técnico em Desenvolvimento Web e Engenharia de Software" : "Technical Diploma in Web Development and Software Engineering"}</h3>
              <p className="tech-card-description">{isPortuguese ? "Diploma emitido pela Universidade Santa Cecília de 700 horas estudadas nas áreas de Desenvolvimento Web e Engenharia de Software" : "Diploma issued by Universidade Santa Cecília with 700 hours studied in Web Development and Software Engineering areas."}</p>
            </div>
            <div className="tech-card">
              <h3 className="tech-card-title">{isPortuguese ? "Certicado Profissional em Desenvolvimento Front-End pela Meta by Coursera" : "Professional Certificate in Front-End Development by Meta by Coursera"}</h3>
              <p className="tech-card-description">{isPortuguese ? "Certificado em Desenvolvimento Front-End em Técnologia React, emitido pela Meta by Coursera." : "Certificate in Front-End Development in React Technology, issued by Meta by Coursera."}</p>
            </div>
            <div className="tech-card">
              <h3 className="tech-card-title">{isPortuguese ? "Especialização em React pela Meta by Coursera" : "React Specialization by Meta"}</h3>
              <p className="tech-card-description">{isPortuguese ? "Certificado em Especialização em React, emitido pela Meta by Coursera." : "Certificate in React Specialization, issued by Meta by Coursera."}</p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default Home;
