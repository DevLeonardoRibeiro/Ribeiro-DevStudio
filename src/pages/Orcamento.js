import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../Header';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import emailjs from '@emailjs/browser';
import '../App.css';

function Orcamento({ isDarkMode, setIsDarkMode, isPortuguese, setIsPortuguese }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbPath = [
    { label: isPortuguese ? 'Home' : 'Home', link: '/' },
    { label: isPortuguese ? 'Orçamento' : 'Quote', link: '/orcamento' }
  ];

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    conheceu: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_sk11p4l',
        'template_x2iswf6',
        {
          from_name: formData.nome,
          from_email: formData.email,
          telefone: formData.telefone,
          assunto: formData.assunto,
          conheceu: formData.conheceu,
          mensagem: formData.mensagem,
        },
        'prCCuZC6ZrmstfCNC'
      );

      setSubmitMessage(isPortuguese ? 'Pedido de orçamento enviado com sucesso!' : 'Quote request sent successfully!');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        conheceu: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage(isPortuguese ? 'Erro ao enviar o pedido.' : 'Error sending the request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      <HelmetProvider>
        <title>{isPortuguese ? "Orçamento - Ribeiro DevStudio" : "Quote - Ribeiro DevStudio"}</title>
        <meta name="description" content={isPortuguese ? "Solicite um orçamento personalizado para desenvolvimento web, aplicações React, sites institucionais e soluções digitais. Entre em contato conosco." : "Request a custom quote for web development, React applications, institutional websites and digital solutions. Contact us."} />
        <meta name="keywords" content={isPortuguese ? "orçamento, cotação, desenvolvimento web, React, sites, aplicações, contato, Ribeiro DevStudio" : "quote, quotation, web development, React, websites, applications, contact, Ribeiro DevStudio"} />
        <meta property="og:title" content={isPortuguese ? "Orçamento - Ribeiro DevStudio" : "Quote - Ribeiro DevStudio"} />
        <meta property="og:description" content={isPortuguese ? "Solicite um orçamento para seus projetos digitais." : "Request a quote for your digital projects."} />
        <meta property="og:image" content="/images/contas-orcamento.webp" />
        <meta property="og:url" content="https://ribeirodevstudio.com/orcamento" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isPortuguese ? "Orçamento - Ribeiro DevStudio" : "Quote - Ribeiro DevStudio"} />
        <meta name="twitter:description" content={isPortuguese ? "Solicite um orçamento para seus projetos digitais." : "Request a quote for your digital projects."} />
        <meta name="twitter:image" content="/images/contas-orcamento.webp" />
        <link rel="canonical" href="https://ribeirodevstudio.com/orcamento" />
      </HelmetProvider>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Banner images="/images/contas-orcamento.webp" alt="Imagem tecnologia de dados" title={isPortuguese ? "Orçamento" : "Quote"} subtitle={isPortuguese ? "Solicite um orçamento conosco." : "Request a quote with us."} />
      <Breadcrumb path={breadcrumbPath} isPortuguese={isPortuguese} />
      <main className="main-content">
        <form className="orcamento-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">{isPortuguese ? "Nome Completo" : "Full Name"}</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder={isPortuguese ? "ex: João Silva" : "e.g.: John Doe"}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{isPortuguese ? "E-mail" : "E-mail"}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={isPortuguese ? "exemplo@email.com" : "example@email.com"}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">{isPortuguese ? "Telefone/Whatsapp" : "Phone/WhatsApp"}</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder={isPortuguese ? "(11) 99999-9999" : "(11) 99999-9999"}
              pattern="[0-9]{10,11}"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">{isPortuguese ? "Assunto" : "Subject"}</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              placeholder={isPortuguese ? "ex: Desenvolvimento de site" : "e.g.: Website development"}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="conheceu">{isPortuguese ? "Como nos conheceu" : "How did you find us"}</label>
            <select
              id="conheceu"
              name="conheceu"
              value={formData.conheceu}
              onChange={handleChange}
              required
            >
              <option value="">{isPortuguese ? "Selecione uma opção" : "Select an option"}</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="indicacao">{isPortuguese ? "Indicação" : "Referral"}</option>
              <option value="outro">{isPortuguese ? "Outro" : "Other"}</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">{isPortuguese ? "Mensagem" : "Message"}</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              placeholder={isPortuguese ? "Descreva detalhadamente sua necessidade (max 750 caracteres)" : "Describe your need in detail (max 750 characters)"}
              minLength="10"
              maxLength="750"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (isPortuguese ? 'Enviando...' : 'Sending...') : (isPortuguese ? 'Enviar' : 'Send')}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
          <p className="lgpd-text">
            {isPortuguese ? "Ao enviar este formulário, autorizo o tratamento dos meus dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), para fins de contato e prestação de serviços." : "By submitting this form, I authorize the processing of my personal data in accordance with the General Data Protection Law (LGPD - Law No. 13.709/2018), for contact and service provision purposes."}
          </p>
        </form>
      </main>
    </div>
  );
}

export default Orcamento;
