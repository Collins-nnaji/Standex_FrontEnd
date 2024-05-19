import React from 'react';
import { Link } from 'react-router-dom';
import './ResumeBuilder.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <Header />
      <h1>Resume Builder</h1>
      <div className="cards">
        <Link to="/resume-builder/template-gallery">
          <img src="/images/Template Gallery Card.svg" alt="Template Gallery" className="card" />
        </Link>
        <Link to="/resume-builder/resume-editor">
          <img src="/images/Resume Editor Card.svg" alt="Resume Editor" className="card" />
        </Link>
        <Link to="/resume-builder/profile-setup">
          <img src="/images/Profile Setup Card.svg" alt="Profile Setup" className="card" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
