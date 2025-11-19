import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaCheckCircle } from 'react-icons/fa';
import { SiExpress, SiVercel } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { MdCloud } from 'react-icons/md';
import '../App.css';

function Sobre({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Sobre' : 'About', link: '/sobre' }
  ];

  return (
    <div className="App">
      <Helmet>
        <title>{isPortuguese ? "Sobre Nós - Ribeiro DevStudio" : "About Us - Ribeiro DevStudio"}</title>
        <meta name="description" content={isPortuguese ? "Conheça a Ribeiro DevStudio, empresa de desenvolvimento web fundada por Leonardo Oliveira Ribeiro. Especialista em React, Node.js e soluções digitais personalizadas." : "Meet Ribeiro DevStudio, a web development company founded by Leonardo Oliveira Ribeiro. Expert in React, Node.js and custom digital solutions."} />
        <meta name="keywords" content={isPortuguese ? "Ribeiro DevStudio, Leonardo Oliveira Ribeiro, desenvolvimento web, React, Node.js, soluções digitais, engenharia civil" : "Ribeiro DevStudio, Leonardo Oliveira Ribeiro, web development, React, Node.js, digital solutions, civil engineering"} />
        <meta property="og:title" content={isPortuguese ? "Sobre Nós - Ribeiro DevStudio" : "About Us - Ribeiro DevStudio"} />
        <meta property="og:description" content={isPortuguese ? "Conheça nossa história e expertise em desenvolvimento web e software." : "Learn our story and expertise in web development and software."} />
        <meta property="og:image" content="/images/code-sobre.jpg" />
        <meta property="og:url" content="https://ribeirodevstudio.com/sobre" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isPortuguese ? "Sobre Nós - Ribeiro DevStudio" : "About Us - Ribeiro DevStudio"} />
        <meta name="twitter:description" content={isPortuguese ? "Conheça nossa história e expertise em desenvolvimento web e software." : "Learn our story and expertise in web development and software."} />
        <meta name="twitter:image" content="/images/code-sobre.jpg" />
        <link rel="canonical" href="https://ribeirodevstudio.com/sobre" />
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/code-sobre.jpg" alt="Imagem de um codigo" title={isPortuguese ? "Sobre Nós" : "About Us"} subtitle={isPortuguese ? "Conheça nossa história." : "Learn our story."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <div className="sobre-layout">
          <div className="sobre-desktop-image">
            <img src="/images/data - sobre.jpg" alt="Data sobre" />
          </div>
          <div className="sobre-text">
            <h1>{isPortuguese ? "Ribeiro DevStudio — Transformando Ideias em Soluções Digitais" : "Ribeiro DevStudio — Transforming Ideas into Digital Solutions"}</h1>
            <p>{isPortuguese ? "A Ribeiro DevStudio é uma empresa criada por Leonardo Oliveira Ribeiro, desenvolvedor Web e fundador apaixonado por tecnologia, inovação e resultados. Com experiência de 7 anos como Projetista Técnico na Engenharia Civil e formação em Desenvolvimento Web, Engenharia de Software e Análise e Desenvolvimento de Sistemas, Leonardo une visão técnica, criatividade e uma abordagem estratégica para entregar projetos digitais de alto impacto." : "Ribeiro DevStudio is a company created by Leonardo Oliveira Ribeiro, a web developer and founder passionate about technology, innovation, and results. With 7 years of experience as a Technical Designer in Civil Engineering and training in Web Development, Software Engineering, and Systems Analysis and Development, Leonardo combines technical vision, creativity, and a strategic approach to deliver high-impact digital projects."}</p>
            <h2>{isPortuguese ? "O que entregamos" : "What We Deliver"}</h2>
            <p><FaCheckCircle style={{ marginRight: '10px', color: '#28a745' }} />{isPortuguese ? "Sites profissionais com performance otimizada" : "Professional websites with optimized performance"}</p>
            <p><FaCheckCircle style={{ marginRight: '10px', color: '#28a745' }} />{isPortuguese ? "Aplicações Web sob demanda" : "On-demand web applications"}</p>
            <p><FaCheckCircle style={{ marginRight: '10px', color: '#28a745' }} />{isPortuguese ? "Design institucional (PowerPoint, PDF, papel timbrado)" : "Institutional design (PowerPoint, PDF, letterhead)"}</p>
            <p><FaCheckCircle style={{ marginRight: '10px', color: '#28a745' }} />{isPortuguese ? "Soluções completas de presença online" : "Complete online presence solutions"}</p>
            <h2>{isPortuguese ? "Tecnologias e Especialidades" : "Technologies and Specialties"}</h2>
            <div className="tech-cards sobre-page">
              <div className="tech-card">
                <FaReact size={30} />
                <span>React</span>
              </div>
              <div className="tech-card">
                <FaNodeJs size={30} />
                <span>Node.js</span>
              </div>
              <div className="tech-card">
                <SiExpress size={30} />
                <span>Express</span>
              </div>
              <div className="tech-card">
                <FaHtml5 size={30} />
                <span>HTML</span>
              </div>
              <div className="tech-card">
                <FaCss3Alt size={30} />
                <span>CSS</span>
              </div>
              <div className="tech-card">
                <FaJsSquare size={30} />
                <span>JavaScript</span>
              </div>
              <div className="tech-card">
                <AiOutlineApi size={30} />
                <span>APIs</span>
              </div>
              <div className="tech-card">
                <SiVercel size={30} />
                <span>Vercel</span>
              </div>
              <div className="tech-card">
                <MdCloud size={30} />
                <span>Cloud Hosting</span>
              </div>
            </div>
            <p>{isPortuguese ? "Cada solução é pensada para ser escalável, acessível e com excelente experiência do usuário." : "Each solution is designed to be scalable, accessible, and with excellent user experience."}</p>
            <h2>{isPortuguese ? "Compromisso e Visão" : "Commitment and Vision"}</h2>
            <p>{isPortuguese ? "Nossa meta é ajudar empresas e profissionais a elevarem sua presença digital, criando projetos que realmente entregam valor. Na Ribeiro DevStudio, cada solução é única — feita com atenção, qualidade e foco em resultados reais." : "Our goal is to help companies and professionals elevate their digital presence, creating projects that truly deliver value. At Ribeiro DevStudio, each solution is unique — made with care, quality, and focus on real results."}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Sobre;
