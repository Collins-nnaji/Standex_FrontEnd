import React from 'react';
import { Link } from 'react-router-dom';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DojoPage = () => {
  return (
    <div className="dojo-page">
      <Header />
      <div className="welcome-section">
        <div className="welcome-text">
          <h1 className="stylish-font">Discover Your Path</h1>
          <p className="sub-text">
            Discover your ideal tech career with Dojo. Our AI-driven platform matches you with courses tailored to your goals, ensuring you gain valuable skills quickly. Start building real skills today with Dojo.
          </p>
        </div>
      </div>
      <div className="features-container">
        <h2>Features</h2>
        <div className="frames">
          <img src="/images/Frame1.svg" alt="Feature 1" className="frame" />
          <img src="/images/Frame2.svg" alt="Feature 2" className="frame" />
        </div>
      </div>
      <div className="get-started">
        <h2>Get Started</h2>
        <Link to="/dojo/learning-path" className="card-link">
          <img src="/images/Learning Path Card.svg" alt="Learning Path" className="card" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default DojoPage;
