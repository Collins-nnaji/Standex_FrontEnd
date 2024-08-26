import React, { useRef, useEffect } from 'react';
import './homePage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';

const HomePage = () => {
  const cloudServicesRef = useRef(null);
  const webMobileAppRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const dataAIRef = useRef(null);

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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const openCalendlyPopup = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/standexdigital/30min' });
  };

  const digitalMarketingDetails = [
    {
      title: "SEO Optimization",
      details: "Enhance your online visibility with our comprehensive SEO services. From in-depth keyword research to on-page and off-page optimization, we ensure your site ranks higher in search results. Our strategies are tailored to drive organic traffic and improve your search engine rankings.",
      duration: "6-12 months",
      price: "£1500 - £8000"
    },
    {
      title: "Ads (Google, YouTube, Social Media)",
      details: "Drive targeted traffic to your website with our expertly managed ad campaigns across Google, YouTube, and social media platforms. We handle everything from ad creation to performance monitoring, ensuring your ads reach the right audience and achieve maximum ROI. Our team constantly optimizes the campaigns to keep your business ahead of the competition.",
      duration: "Ongoing",
      price: "£500 - £2000/month"
    },
    {
      title: "Analytics Setup (Google Analytics and Microsoft Clarity)",
      details: "Gain comprehensive insights into user behavior on your website with our analytics setup. We configure Google Analytics and Microsoft Clarity to provide detailed data on user interactions, session recordings, heatmaps, and more. This data helps you make informed decisions to improve user experience and conversion rates.",
      duration: "1-3 months",
      price: "£500 - £3000"
    },
    {
      title: "Email Marketing",
      details: "Boost your engagement and conversions with our tailored email marketing campaigns. We create, manage, and optimize email strategies that effectively reach your audience, keeping them informed and engaged with your brand.",
      duration: "Ongoing",
      price: "£300 - £1500/month"
    }
  ];

  const cloudServicesDetails = [
    {
      title: "Cloud Migration",
      details: "Seamlessly transition your infrastructure to the cloud with minimal downtime. Our team ensures a smooth migration process, from planning to execution. We assess your current setup, plan the migration strategy, and execute it efficiently, ensuring your data and applications are securely transferred.",
      duration: "3-6 months",
      price: "£5000 - £20000"
    },
    {
      title: "Disaster Recovery",
      details: "Protect your data with our robust disaster recovery solutions. We implement strategies to ensure your business can quickly recover from any data loss. Our services include regular backups, recovery drills, and comprehensive disaster recovery planning to keep your operations running smoothly.",
      duration: "Ongoing",
      price: "£2000 - £10000/year"
    },
    {
      title: "Cost Management",
      details: "Optimize your cloud expenditure with our cost management services. We help you identify cost-saving opportunities and implement best practices. Our team continuously monitors your cloud usage and provides detailed reports and recommendations to reduce costs without compromising performance.",
      duration: "Ongoing",
      price: "£1500 - £8000/year"
    },
    {
      title: "Enterprise Architecture Design",
      details: "Develop a robust and scalable enterprise architecture with our comprehensive design services. We focus on data architecture and solution architecture to ensure your IT infrastructure aligns with your business goals and supports your future growth.",
      duration: "3-9 months",
      price: "£5000 - £25000"
    }
  ];

  const webMobileAppDetails = [
    {
      title: "eCommerce Development",
      details: "Launch your online store with our custom eCommerce development services. We create scalable and secure platforms to enhance your sales. Our solutions include shopping cart integration, payment gateway setup, and custom features tailored to your business needs.",
      duration: "3-6 months",
      price: "£10000 - £50000"
    },
    {
      title: "API Integration",
      details: "Integrate third-party services and enhance your app's functionality with our API integration solutions. We ensure seamless connectivity and performance, allowing your application to communicate effectively with other services and systems.",
      duration: "1-3 months",
      price: "£5000 - £20000"
    },
    {
      title: "Progressive Web and Mobile Apps",
      details: "Develop high-performance progressive web and mobile apps that offer a native app-like experience. Our team delivers solutions that are fast, reliable, and engaging. We focus on performance optimization, offline capabilities, and responsive design to provide an excellent user experience.",
      duration: "3-6 months",
      price: "£15000 - £60000"
    },
    {
      title: "Setting up Power Apps",
      details: "Automate your business processes and create custom applications with Power Apps. We provide setup and customization to streamline your operations, improve efficiency, and integrate seamlessly with other Microsoft services.",
      duration: "1-6 months",
      price: "£2000 - £10000"
    }
  ];

  const dataAIDetails = [
    {
      title: "Predictive Analytics",
      details: "Leverage predictive analytics to forecast trends and make data-driven decisions. Our solutions help you stay ahead of the competition by providing insights into future trends, customer behavior, and potential risks. We use advanced statistical techniques and machine learning algorithms to deliver accurate predictions.",
      duration: "2-6 months",
      price: "£3000 - £15000"
    },
    {
      title: "NLP Solutions",
      details: "Implement natural language processing solutions to automate text analysis and enhance user interactions. We deliver custom NLP models tailored to your needs, enabling you to extract valuable insights from text data, automate customer support, and improve user experience.",
      duration: "3-9 months",
      price: "£4000 - £20000"
    },
    {
      title: "Business Intelligence Services",
      details: "Unlock the full potential of your data with our business intelligence services. We set up and analyze data to provide actionable insights that drive strategic decision-making. Our services include data visualization, dashboard creation, and in-depth analysis to help you understand your business performance.",
      duration: "1-6 months",
      price: "£3000 - £15000"
    },
    {
      title: "AI-driven Automation with Power Automate",
      details: "Automate repetitive tasks and improve efficiency with our AI-driven automation solutions, integrating with Power Automate. We help you implement intelligent systems that adapt and learn, reducing manual effort and increasing productivity. Our solutions include process automation, robotic process automation (RPA), and custom AI models.",
      duration: "3-12 months",
      price: "£5000 - £25000"
    }
  ];

  return (
    <div className="homepage">
      <Header />
      <header className="welcome-section1">
        <div className="welcome-text">
          <h1 className="stylish-font">Welcome to Your Digital Evolution</h1>
          <p className="sub-text">Enhance your journey with digital services, Dojo, and Tech Elevate training.</p>
        </div>
        <img src="/images/Home Page.svg" alt="Home" className="home-image" />
      </header>

      <section className="combined-section">
        <h2>About Us</h2>
        <div className="cards">
          <div className="card-container">
            <p className="card-title">Our Vision</p>
            <p>Leading in digital solutions and pioneering technologies that empower businesses and individuals worldwide.</p>
          </div>
          <div className="card-container">
            <p className="card-title">Our Mission</p>
            <p>Delivering superior digital services to optimize efficiency, drive growth, and equip businesses and learners for success.</p>
          </div>
          <div className="card-container">
            <p className="card-title">Our Team</p>
            <p>Experts in cloud computing, web and app development, digital marketing, and AI, transforming innovative ideas into products.</p>
          </div>
        </div>
      </section>

      <section className="homepage-content">
        <h2>Our Services</h2>
        <p className="intro-paragraph">We offer a comprehensive range of services to help businesses grow and succeed in the digital world. From cloud services to digital marketing, explore the options below to learn more about what we can do for you and how we can transform your business for the digital age.</p>
        <div className="image-cards">
          <div onClick={() => scrollToSection(cloudServicesRef)} className="image-card">
            <img src="/images/Cloud Service Card.svg" alt="Cloud Services" />
          </div>
          <div onClick={() => scrollToSection(webMobileAppRef)} className="image-card">
            <img src="/images/Web and Mobile App Card.svg" alt="Web and Mobile App Development" />
          </div>
          <div onClick={() => scrollToSection(digitalMarketingRef)} className="image-card">
            <img src="/images/Digital Marketing Card.svg" alt="Digital Marketing" />
          </div>
          <div onClick={() => scrollToSection(dataAIRef)} className="image-card">
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
        <Accordion title="View Service Details" content={cloudServicesDetails} isCardContent={true} />
      </section>

      <section ref={webMobileAppRef} className="service-section">
        <h2>Web & Mobile App Development</h2>
        <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="feature-image" />
        <div className="service-content">
          <p className="service-description">We bring your ideas to life with custom web and mobile applications, utilizing the latest technologies for high-quality, scalable solutions. Our services include eCommerce development, API integration, and progressive web apps, ensuring seamless, efficient, and engaging user experiences.</p>
        </div>
        <Accordion title="View Service Details" content={webMobileAppDetails} isCardContent={true} />
      </section>

      <section ref={digitalMarketingRef} className="service-section">
        <h2>Digital Marketing</h2>
        <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="feature-image" />
        <div className="service-content">
          <p className="service-description">Our digital marketing strategies are tailored to enhance online presence and drive growth. We offer SEO, PPC advertising, social media marketing, content marketing, and email campaigns, all designed to maximize engagement and ROI for your business.</p>
        </div>
        <Accordion title="View Service Details" content={digitalMarketingDetails} isCardContent={true} />
      </section>

      <section ref={dataAIRef} className="service-section">
        <h2>Data & AI</h2>
        <img src="/images/Data and Ai page.svg" alt="Data and AI" className="feature-image" />
        <div className="service-content">
          <p className="service-description">Leverage our Data & AI services to gain valuable insights and automate processes. We provide predictive analytics, NLP solutions, computer vision, big data architectures, and AI-driven automation, empowering informed decision-making and operational efficiency.</p>
        </div>
        <Accordion title="View Service Details" content={dataAIDetails} isCardContent={true} />
      </section>

      <div className="interaction-section">
        <div className="consultation-section">
          <h2>Book a Session to Discover How We Can Help</h2>
          <p>Our team will get back to you within 24 hours of receiving your request.</p>
          <p>For general inquiries, send an email to <a href="mailto:admin@standexdigital.tech"><strong>admin@standexdigital.tech</strong></a>.</p>
          <p>For urgent requests, book a meeting below:</p>
          <button onClick={openCalendlyPopup} className="calendly-button">Book a Session with One of Our Experts</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
