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
      <div className="container">
        <header className="welcome-section">
          <img src="/images/logo.svg" alt="Standex Logo" className="logo" /> {/* Add the logo */}
          <h1>Welcome to Standex Digital</h1>
          <p>At Standex Digital, we're driven by the power of digital transformation to redefine the possibilities of tomorrow. As a leading digital transformation company, we empower businesses to excel in a digitally driven world. Our EdTech platform, Standex Dojo, streamlines your tech learning journey. Our Resume Builder offers advanced tools to craft standout resumes, opening doors to new career opportunities. Our Tech Jobs Board connects you with your next opportunity in the tech industry. Join us at Standex Digital, where we turn your digital dreams into reality!</p>
          <img src="/images/welcomeimage.svg" alt="Welcome" className="welcome-image" /> {/* Add the welcome image */}
        </header>

        <section className="combined-section">
          <h2>Our Vision, Mission, and Team</h2>
          <p>At Standex Digital, our vision is to lead in digital solutions, pioneering technologies that empower businesses and individuals. We deliver superior digital services to optimize efficiency and drive growth. Our mission is to equip businesses and learners with the tools and knowledge for success in the digital age. Our diverse team of experts in cloud computing, web and app development, digital marketing, and AI solutions prioritizes continuous learning and teamwork, transforming innovative ideas into practical digital products and services.</p>
        </section>

        <section className="homepage-content">
          <h2>Our Services</h2>
          <p>We offer a range of services to help businesses grow and succeed in the digital world. Explore the options below to learn more about what we can do for you.</p>
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
            <p>Our cloud services provide comprehensive solutions to manage and optimize your cloud infrastructure. From design and deployment to security and compliance, we cover all aspects to ensure your business runs smoothly in the cloud environment.</p>
            <p><strong>Cloud Infrastructure Management:</strong> Design, deployment, and management of cloud infrastructure on platforms such as AWS, Azure, and Google Cloud.</p>
            <p><strong>Cloud Security and Compliance:</strong> Implementation of security measures and ensuring compliance with industry standards and regulations.</p>
            <p><strong>Cloud Migration Services:</strong> Planning and executing the migration of on-premises applications and data to the cloud.</p>
            <p><strong>Disaster Recovery Solutions:</strong> Development of robust disaster recovery plans to ensure business continuity.</p>
            <p><strong>Cloud Optimization and Cost Management:</strong> Monitoring and optimizing cloud resources for cost-efficiency and performance.</p>
          </div>
        </section>
        <section ref={webMobileAppRef} className="service-section">
          <h2>Web & Mobile App Development</h2>
          <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="feature-image" />
          <div className="service-content">
            <p>Our web and mobile app development services are designed to bring your ideas to life. We create custom solutions that are tailored to your business needs, using the latest technologies to deliver high-quality, scalable applications.</p>
            <p><strong>Custom Web Application Development:</strong> Creating tailor-made web applications using technologies like React, Angular, and Vue.js.</p>
            <p><strong>Mobile App Development:</strong> Development of native and cross-platform mobile applications for iOS and Android using Swift, Kotlin, Flutter, and React Native.</p>
            <p><strong>eCommerce Development:</strong> Building secure and scalable eCommerce platforms with payment gateway integrations and shopping cart functionalities.</p>
            <p><strong>API Development and Integration:</strong> Designing and integrating APIs for seamless communication between different software systems.</p>
            <p><strong>Progressive Web Apps (PWAs):</strong> Development of progressive web apps that offer a native app-like experience on the web.</p>
          </div>
        </section>
        <section ref={digitalMarketingRef} className="service-section">
          <h2>Digital Marketing</h2>
          <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="feature-image" />
          <div className="service-content">
            <p>Our digital marketing services help you reach a larger audience and grow your business online. We develop strategies that are tailored to your business goals, ensuring maximum engagement and return on investment.</p>
            <p><strong>Search Engine Optimization (SEO):</strong> Improving website visibility on search engines through on-page and off-page SEO strategies.</p>
            <p><strong>Pay-Per-Click (PPC) Advertising:</strong> Managing PPC campaigns on platforms like Google Ads and social media to drive targeted traffic.</p>
            <p><strong>Social Media Marketing:</strong> Creating and executing social media strategies to engage with audiences on platforms like Facebook, Instagram, and LinkedIn.</p>
            <p><strong>Content Marketing:</strong> Developing and distributing valuable content to attract and retain a clearly defined audience.</p>
            <p><strong>Email Marketing Campaigns:</strong> Designing and managing email marketing campaigns to nurture leads and convert them into customers.</p>
          </div>
        </section>
        <section ref={dataAIRef} className="service-section">
          <h2>Data & AI</h2>
          <img src="/images/Data and Ai page.svg" alt="Data and AI" className="feature-image" />
          <div className="service-content">
            <p>Leverage our Data & AI services to gain insights and intelligence from your data. We utilize advanced technologies to deliver solutions that help you make informed decisions and automate processes.</p>
            <p><strong>Predictive Analytics:</strong> Utilizing data to forecast future trends and behaviors through machine learning models.</p>
            <p><strong>Natural Language Processing (NLP):</strong> Implementing NLP solutions for tasks like sentiment analysis, text summarization, and chatbot development.</p>
            <p><strong>Computer Vision:</strong> Developing AI systems for image and video analysis, including object detection and facial recognition.</p>
            <p><strong>Big Data Solutions:</strong> Designing and implementing big data architectures using technologies like Hadoop and Spark for processing large datasets.</p>
            <p><strong>AI-Powered Automation:</strong> Creating AI-driven automation solutions to optimize business processes and workflows.</p>
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
        
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
