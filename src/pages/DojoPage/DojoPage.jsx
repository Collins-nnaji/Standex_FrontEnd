import React from 'react';
import { Link } from 'react-router-dom';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DojoPage = () => {
  return (
    <div className="dojo-page">
      <Header />
      <div className="container">
        <div className="intro-container">
          <img src="/images/dojo_logo.png" alt="Dojo Logo" className="dojo-logo" />
          <div className="intro-text">
            <h2>Welcome to Standex Dojo</h2>
            <p>Discover your ideal tech career path with Standex Dojo. Our AI-driven platform filters through options to find the courses that best suit your goals, ensuring you gain valuable, applicable skills quickly. Embark on a tailored learning journey that transforms your curiosity into expertise. Join Standex Dojo and start building real skills today.</p>
          </div>
        </div>
        <div className="features-container">
          <h2>Features</h2>
          <div className="frames">
            <img src="/images/Frame1.svg" alt="Feature 1" className="frame" />
            <img src="/images/Frame2.svg" alt="Feature 2" className="frame" />
            <img src="/images/Frame3.svg" alt="Feature 3" className="frame" />
            <img src="/images/Frame4.svg" alt="Feature 4" className="frame" />
          </div>
        </div>
        <div className="get-started">
          <h2>Get Started with Standex Dojo</h2>
          <p>Follow these steps to begin your learning journey:</p>
        </div>
        <div className="cards">
          <div className="card-container">
            <div className="step-number">1</div>
            <Link to="/dojo/chatbot">
              <img src="/images/Chatbot Card.svg" alt="Dojo Chatbot" className="card" />
              <p className="click-instruction">Click here</p>
            </Link>
          </div>
          <div className="card-container">
            <div className="step-number">2</div>
            <Link to="/dojo/learning-path">
              <img src="/images/Learning Path Card.svg" alt="Learning Path" className="card" />
              <p className="click-instruction">Click here</p>
            </Link>
          </div>
          <div className="card-container">
            <div className="step-number">3</div>
            <Link to="/dojo/progress-tracking">
              <img src="/images/Progress Tracking Card.svg" alt="Progress Tracking" className="card" />
              <p className="click-instruction">Click here</p>
            </Link>
          </div>
          <div className="card-container">
            <div className="step-number">4</div>
            <Link to="/dojo/community">
              <img src="/images/Join Community Card.svg" alt="Join Community" className="card" />
              <p className="click-instruction">Click here</p>
            </Link>
          </div>
        </div>
        <img src="/images/Learning.png" alt="Learning" className="learning-image" />
      </div>
      <Footer />
    </div>
  );
};

export default DojoPage;
