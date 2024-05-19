import React from 'react';
import './CloudServices.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const CloudServices = () => {
  return (
    <div className="cloud-services">
      <Header />
      <h1>Cloud Services</h1>
      <img src="/images/Cloud Services.svg" alt="Cloud Services" className="service-image" />
      <p>Our cloud services include hosting, storage, and cloud-based applications to support your business operations.</p>
      <Footer />
    </div>
  );
};

export default CloudServices;
