import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Header />
      <h1>Our Services</h1>
      <div className="cards">
        <Link to="/services/cloud-services">
          <img src="/images/Cloud Service Card.svg" alt="Cloud Services" className="card" />
        </Link>
        <Link to="/services/web-mobile-app">
          <img src="/images/Web and Mobile App Card.svg" alt="Web and Mobile App Development" className="card" />
        </Link>
        <Link to="/services/digital-marketing">
          <img src="/images/Digital Marketing Card.svg" alt="Digital Marketing" className="card" />
        </Link>
        <Link to="/services/data-ai">
          <img src="/images/Data and Ai Card.svg" alt="Data & AI" className="card" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
