import React from 'react';
import './DigitalMarketing.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing">
      <Header />
      <h1>Digital Marketing</h1>
      <img src="/images/Digital Marketing page.svg" alt="Digital Marketing" className="service-image" />
      <p>Boost your business with our digital marketing services.</p>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
