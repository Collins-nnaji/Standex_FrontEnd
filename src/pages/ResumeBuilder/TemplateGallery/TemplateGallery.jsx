import React from 'react';
import './TemplateGallery.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const TemplateGallery = () => {
  return (
    <div className="template-gallery">
      <Header />
      <h1>Template Gallery</h1>
      <img src="/images/Template Gallery.svg" alt="Template Gallery" className="feature-image" />
      <p>Choose from a variety of resume templates to get started.</p>
      <Footer />
    </div>
  );
};

export default TemplateGallery;
