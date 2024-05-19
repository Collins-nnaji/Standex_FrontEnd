import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const cloudServicesRef = useRef(null);
  const webMobileAppRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const dataAIRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      <Header />
      <div className="container">
        <header className="homepage-header">
          <h1>Welcome to Standex Digital</h1>
          
          <p>At Standex Digital, we're driven by the power of digital transformation to redefine the possibilities of tomorrow. As a leading provider in Cloud Computing, Web and App Development, Digital Marketing, and Data & AI Solutions, we empower businesses to excel in a digitally driven world.</p>
          <p>Dive into our innovative products like Standex Dojo, our EdTech platform where users engage with a smart chatbot to create personalized learning paths, track their progress, and explore our extensive Tech Jobs Board. Find your next opportunity in the tech industry or post vacancies to attract top talent.</p>
          <p>Our vibrant community feature also allows learners to connect, share, and grow together. Furthermore, our Resume Builder provides advanced tools to craft standout resumes that open doors to new career opportunities.</p>
          <p>Join us at Standex Digital, where we turn your digital dreams into reality!</p>
        </header>
        <section className="vision-mission">
          <h2>Vision Statement</h2>
          <p>"To be the global leader in digital solutions, pioneering innovative technologies that empower businesses and individuals to thrive in an ever-evolving digital landscape."</p>
          <h2>Mission Statement</h2>
          <p>"Standex Digital is committed to delivering superior digital services that optimize operational efficiency and drive growth. Our mission is to equip businesses and learners with the tools and knowledge necessary to succeed in the digital age. Through Standex Dojo and our comprehensive digital solutions, we foster a community of continuous learning, innovation, and career development, all while ensuring accessibility, reliability, and excellence in every interaction."</p>
        </section>
        <section className="our-team">
          <h2>Our Team at Standex Digital</h2>
          <p>Our team at Standex Digital is made up of skilled professionals from various backgrounds, united by a passion for technology and innovation. We have experts in cloud computing, web and app development, digital marketing, and data-driven AI solutions.</p>
          <p>Our engineers, analysts, and marketers work together to deliver advanced digital solutions that meet the needs of our clients. Led by experienced leaders, we prioritize continuous learning and teamwork to stay ahead in the tech industry. Together, we are committed to transforming innovative ideas into practical digital products and services.</p>
        </section>
        <section className="homepage-content">
          <h2>Our Services</h2>
          <div className="cards">
            <div onClick={() => scrollToSection(cloudServicesRef)}>
              <img src="/images/Cloud Service Card.svg" alt="Cloud Services" className="card" />
            </div>
            <div onClick={() => scrollToSection(webMobileAppRef)}>
              <img src="/images/Web and Mobile App Card.svg" alt="Web and Mobile App Development" className="card" />
            </div>
            <div onClick={() => scrollToSection(digitalMarketingRef)}>
              <img src="/images/Digital Marketing Card.svg" alt="Digital Marketing" className="card" />
            </div>
            <div onClick={() => scrollToSection(dataAIRef)}>
              <img src="/images/Data and Ai Card.svg" alt="Data & AI" className="card" />
            </div>
          </div>
        </section>
        <section ref={cloudServicesRef} className="service-section">
          <h2>Cloud Services</h2>
          <img src="/images/Cloud Services.svg" alt="Cloud Services" className="feature-image" />
          <p>Our cloud services include hosting, storage, and cloud-based applications to support your business operations.</p>
        </section>
        <section ref={webMobileAppRef} className="service-section">
          <h2>Web & Mobile App Development</h2>
          <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="feature-image" />
          <p>We offer end-to-end web and mobile app development services to bring your ideas to life.</p>
        </section>
        <section ref={digitalMarketingRef} className="service-section">
          <h2>Digital Marketing</h2>
          <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="feature-image" />
          <p>Our digital marketing services help you reach a larger audience and grow your business online.</p>
        </section>
        <section ref={dataAIRef} className="service-section">
          <h2>Data & AI</h2>
          <img src="/images/Data and Ai Page.svg" alt="Data and AI" className="feature-image" />
          <p>Leverage our Data & AI services to gain insights and intelligence from your data.</p>
        </section>
        <img src="/images/Home Page.svg" alt="Home" className="home-image" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
