import React from 'react';
import { Link } from 'react-router-dom';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DojoPage = () => {
  return (
    <div className="dojo-page">
      <Header />
      <img src="/images/DojoLogo.svg" alt="Dojo Logo" className="dojo-logo" />
      <div className="welcome-section">
        <div className="welcome-text">
          <h1 className="stylish-font">Discover Your Path</h1>
          <p className="sub-text">
            Unlock Your Tech Potential with Dojo. Our AI-driven platform crafts personalized learning paths, skill assessments, project builders, and career advice to accelerate your journey. Start mastering real skills today with Dojo.
          </p>
        </div>
      </div>
      <div className="features-container">
        <h2>Features</h2>
        <div className="frames">
          <img src="/images/Frame1.svg" alt="Feature 1" className="frame" />
          <img src="/images/Frame2.svg" alt="Feature 2" className="frame" />
        </div>
        <img src="/images/Learning.png" alt="Learning" className="learning-image" />
      </div>
      <div className="get-started">
        <Link to="/dojo/learning-path" className="get-started-button">
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default DojoPage;
