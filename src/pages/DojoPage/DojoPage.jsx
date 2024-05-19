import React from 'react';
import { Link } from 'react-router-dom';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DojoPage = () => {
  return (
    <div className="dojo-page">
      <Header />
      <h1>Dojo</h1>
      <img src="/images/dojo_logo.png" alt="Dojo Logo" className="dojo-logo" />
      <div className="frames">
        <img src="/images/Frame1.svg" alt="Feature 1" className="frame" />
        <img src="/images/Frame2.svg" alt="Feature 2" className="frame" />
        <img src="/images/Frame3.svg" alt="Feature 3" className="frame" />
        <img src="/images/Frame4.svg" alt="Feature 4" className="frame" />
      </div>
      <div className="cards">
        <Link to="/dojo/chatbot">
          <img src="/images/Chatbot Card.svg" alt="Dojo Chatbot" className="card" />
        </Link>
        <Link to="/dojo/learning-path">
          <img src="/images/Learning Path Card.svg" alt="Learning Path" className="card" />
        </Link>
        <Link to="/dojo/progress-tracking">
          <img src="/images/Progress Tracking Card.svg" alt="Progress Tracking" className="card" />
        </Link>
        <Link to="/dojo/community">
          <img src="/images/Join Community Card.svg" alt="Join Community" className="card" />
        </Link>
      </div>
      <img src="/images/Learning.png" alt="Learning" className="learning-image" />
      <Footer />
    </div>
  );
};

export default DojoPage;
