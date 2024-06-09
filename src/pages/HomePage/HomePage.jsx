import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const cloudServicesRef = useRef(null);
  const webMobileAppRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const dataAIRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the backend endpoint
    const response = await fetch('https://your-backend-endpoint.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
        service: ''
      });
    } else {
      alert('Failed to send your message. Please try again.');
    }
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
            <p><strong>At Standex Digital, our vision is to lead in digital solutions, pioneering technologies that empower businesses and individuals.</strong></p>
          </div>
          <div className="card-container">
            <p><strong>We deliver superior digital services to optimize efficiency and drive growth. Our mission is to equip businesses and learners with the tools and knowledge for success in the digital age.</strong></p>
          </div>
          <div className="card-container">
            <p><strong>Our diverse team of experts in cloud computing, web and app development, digital marketing, and AI solutions prioritizes continuous learning and teamwork, transforming innovative ideas into practical digital products and services.</strong></p>
          </div>
        </div>
      </section>

      <section className="homepage-content">
        <h2>Our Services</h2>
        <p className="intro-paragraph">We offer a comprehensive range of services to help businesses grow and succeed in the digital world. From cloud services to digital marketing, explore the options below to learn more about what we can do for you and how we can transform your business for the digital age.</p>
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

      <div className="consultation-section">
        <button className="consultation-link" onClick={toggleFormVisibility}>Book a Consultation</button>
        {formVisible && (
          <form className={`consultation-form ${formVisible ? 'active' : ''}`} onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              required
            >
              <option value="">Select Service</option>
              <option value="Cloud Services">Cloud Services</option>
              <option value="Web & Mobile App Development">Web & Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Data & AI">Data & AI</option>
            </select>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>

      <div className="chatbot-section">
        <Link to="/dojo/chatbot">
          <img src="/images/Chatbot Card.svg" alt="Dojo Chatbot" className="chatbot-card" />
          <p className="chatbot-text">To find out more about us and our services, engage with our chatbot.</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
