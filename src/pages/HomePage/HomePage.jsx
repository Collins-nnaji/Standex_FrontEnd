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

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="homepage">
      <Header />
      <header className="welcome-section">
        <img src="/images/logo.svg" alt="Standex Logo" className="logo" />
        <h1>Welcome to Standex Digital</h1>
        <p>At Standex Digital, we're driven by the power of digital transformation to redefine the possibilities of tomorrow. As a leading digital transformation company, we empower businesses to excel in a digitally driven world. Our EdTech platform, Standex Dojo, streamlines your tech learning journey. Our Resume Builder offers advanced tools to craft standout resumes, opening doors to new career opportunities. Our Tech Jobs Board connects you with your next opportunity in the tech industry. Join us at Standex Digital, where we turn your digital dreams into reality!</p>
        <img src="/images/welcomeimage.svg" alt="Welcome" className="welcome-image" />
      </header>

      <section className="combined-section">
        <h2>Our Vision, Mission, and Team</h2>
        <p>At Standex Digital, our vision is to lead in digital solutions, pioneering technologies that empower businesses and individuals. We deliver superior digital services to optimize efficiency and drive growth. Our mission is to equip businesses and learners with the tools and knowledge for success in the digital age. Our diverse team of experts in cloud computing, web and app development, digital marketing, and AI solutions prioritizes continuous learning and teamwork, transforming innovative ideas into practical digital products and services.</p>
      </section>

      <section className="homepage-content">
        <h2>Our Services</h2>
        <p>We offer a range of services to help businesses grow and succeed in the digital world. Explore the options below to learn more about what we can do for you.</p>
        <div className="cards">
          <div className="card-container" onClick={() => scrollToSection(cloudServicesRef)}>
            <img src="/images/Cloud Service Card.svg" alt="Cloud Services" className="card" />
          </div>
          <div className="card-container" onClick={() => scrollToSection(webMobileAppRef)}>
            <img src="/images/Web and Mobile App Card.svg" alt="Web and Mobile App Development" className="card" />
          </div>
          <div className="card-container" onClick={() => scrollToSection(digitalMarketingRef)}>
            <img src="/images/Digital Marketing Card.svg" alt="Digital Marketing" className="card" />
          </div>
          <div className="card-container" onClick={() => scrollToSection(dataAIRef)}>
            <img src="/images/Data and Ai Card.svg" alt="Data & AI" className="card" />
          </div>
        </div>
      </section>
      <section ref={cloudServicesRef} className="service-section">
        <h2>Cloud Services</h2>
        <img src="/images/Cloud Services.svg" alt="Cloud Services" className="feature-image" />
        <div className="service-content">
          <p>Our cloud services encompass comprehensive solutions for managing and optimizing cloud infrastructure, including design, deployment, and security measures. We offer cloud migration services, robust disaster recovery plans, and continuous cost management to ensure efficient and secure cloud operations.</p>
        </div>
      </section>
      <section ref={webMobileAppRef} className="service-section">
        <h2>Web & Mobile App Development</h2>
        <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="feature-image" />
        <div className="service-content">
          <p>We bring your ideas to life with custom web and mobile applications, utilizing the latest technologies for high-quality, scalable solutions. Our services include eCommerce development, API integration, and progressive web apps, ensuring seamless, efficient, and engaging user experiences.</p>
        </div>
      </section>
      <section ref={digitalMarketingRef} className="service-section">
        <h2>Digital Marketing</h2>
        <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="feature-image" />
        <div className="service-content">
          <p>Our digital marketing strategies are tailored to enhance online presence and drive growth. We offer SEO, PPC advertising, social media marketing, content marketing, and email campaigns, all designed to maximize engagement and ROI for your business.</p>
        </div>
      </section>
      <section ref={dataAIRef} className="service-section">
        <h2>Data & AI</h2>
        <img src="/images/Data and Ai page.svg" alt="Data and AI" className="feature-image" />
        <div className="service-content">
          <p>Leverage our Data & AI services to gain valuable insights and automate processes. We provide predictive analytics, NLP solutions, computer vision, big data architectures, and AI-driven automation, empowering informed decision-making and operational efficiency.</p>
        </div>
      </section>

      <img src="/images/Home Page.svg" alt="Home" className="home-image" />

      <div className="consultation-section">
        <button className="consultation-link" onClick={toggleFormVisibility}>Book a Consultation</button>
        {formVisible && (
          <form className={`consultation-form ${formVisible ? 'active' : ''}`} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
