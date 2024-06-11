import React, { useRef, useState } from 'react';
import './homePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const cloudServicesRef = useRef(null);
  const webMobileAppRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const dataAIRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const scrollToSection = (ref) => {
    const headerElement = ref.current.querySelector('h2');
    const offset = 100; // Adjust this value to set the offset from the top
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = headerElement.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="homepage">
      <Header />
      <header className="welcome-section">
        <div className="welcome-text">
          <h1 className="stylish-font">Welcome to Your Digital Evolution</h1>
          <p className="sub-text">Experience cutting-edge digital transformation services along with our Dojo Learning platform and Tech Elevate training programs.</p>
        </div>
        <img src="/images/Home Page.svg" alt="Home" className="home-image" />
      </header>

      <section className="combined-section">
        <h2>About Us</h2>
        <div className="cards">
          <div className="card-container">
            <p className="card-title">Our Vision</p>
            <p>Leading in digital solutions and pioneering technologies that empower businesses and individuals.</p>
          </div>
          <div className="card-container">
            <p className="card-title">Our Mission</p>
            <p>Delivering superior digital services to optimize efficiency and drive growth, equipping businesses and learners for success.</p>
          </div>
          <div className="card-container">
            <p className="card-title">Our Team</p>
            <p>Diverse experts in cloud computing, web and app development, digital marketing, and AI solutions, transforming innovative ideas into practical digital products and services.</p>
          </div>
        </div>
      </section>

      <section className="homepage-content">
        <h2>Our Services</h2>
        <p className="intro-paragraph">We offer a comprehensive range of services to help businesses grow and succeed in the digital world. From cloud services to digital marketing, explore the options below to learn more about what we can do for you and how we can transform your business for the digital age.</p>
        <div className="cards">
          <div onClick={() => scrollToSection(cloudServicesRef)} className="card cloud-card">
            <img src="/images/Cloud Service Card.svg" alt="Cloud Services" />
          </div>
          <div onClick={() => scrollToSection(webMobileAppRef)} className="card web-card">
            <img src="/images/Web and Mobile App Card.svg" alt="Web and Mobile App Development" />
          </div>
          <div onClick={() => scrollToSection(digitalMarketingRef)} className="card marketing-card">
            <img src="/images/Digital Marketing Card.svg" alt="Digital Marketing" />
          </div>
          <div onClick={() => scrollToSection(dataAIRef)} className="card ai-card">
            <img src="/images/Data and Ai Card.svg" alt="Data & AI" />
          </div>
        </div>
      </section>
      <section ref={cloudServicesRef} className="service-section">
        <h2>Cloud Services</h2>
        <img src="/images/Cloud Services.svg" alt="Cloud Services" className="feature-image" />
        <div className="service-content">
          <p className="service-description">Our cloud services encompass comprehensive solutions for managing and optimizing cloud infrastructure, including design, deployment, and security measures. We offer cloud migration services, robust disaster recovery plans, and continuous cost management to ensure efficient and secure cloud operations.</p>
        </div>
      </section>
      <section ref={webMobileAppRef} className="service-section">
        <h2>Web & Mobile App Development</h2>
        <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="feature-image" />
        <div className="service-content">
          <p className="service-description">We bring your ideas to life with custom web and mobile applications, utilizing the latest technologies for high-quality, scalable solutions. Our services include eCommerce development, API integration, and progressive web apps, ensuring seamless, efficient, and engaging user experiences.</p>
        </div>
      </section>
      <section ref={digitalMarketingRef} className="service-section">
        <h2>Digital Marketing</h2>
        <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="feature-image" />
        <div className="service-content">
          <p className="service-description">Our digital marketing strategies are tailored to enhance online presence and drive growth. We offer SEO, PPC advertising, social media marketing, content marketing, and email campaigns, all designed to maximize engagement and ROI for your business.</p>
        </div>
      </section>
      <section ref={dataAIRef} className="service-section">
        <h2>Data & AI</h2>
        <img src="/images/Data and Ai page.svg" alt="Data and AI" className="feature-image" />
        <div className="service-content">
          <p className="service-description">Leverage our Data & AI services to gain valuable insights and automate processes. We provide predictive analytics, NLP solutions, computer vision, big data architectures, and AI-driven automation, empowering informed decision-making and operational efficiency.</p>
        </div>
      </section>

      <div className="interaction-section">
        <div className="consultation-section">
          <h2>Book a Session to Discover How We Can Help</h2>
          <p>Our team will get back to you within 24 hours of receiving your request.</p>
          <button className="consultation-link" onClick={toggleFormVisibility}>Book a Session</button>
          {formVisible && (
            <div className="google-form-container">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfj7frDmNF1_l7jPZeA5r5n9SRBgzoeLFO4ohA77XO-plfZqA/viewform?embedded=true"
                width="640"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Book a Session Form"
              >Loading…</iframe>
            </div>
          )}
        </div>
        <div className="chatbot-section">
          <button className="chatbot-toggle" onClick={toggleChatbot}>Chat with Us</button>
          {chatbotVisible && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <h2>Chatbot</h2>
                <span className="close" onClick={toggleChatbot}>&times;</span>
              </div>
              <div className="chatbot-content">
                <iframe
                  src="https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_sensei/webchat?__version__=2"
                  frameBorder="0"
                  title="Dojo Chatbot"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
