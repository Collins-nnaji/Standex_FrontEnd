import React from 'react';
import './WebMobileApp.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const WebMobileApp = () => {
  return (
    <div className="web-mobile-app">
      <Header />
      <h1>Web & Mobile App Development</h1>
      <img src="/images/Web and Mobile App.svg" alt="Web and Mobile App" className="service-image" />
      <p>Get the best web and mobile app development services.</p>
      <Footer />
    </div>
  );
};

export default WebMobileApp;
