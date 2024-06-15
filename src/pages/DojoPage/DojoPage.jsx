import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DojoPage = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="dojo-page">
      <Header />
      <div className="welcome-section">
        <img src="/images/dojo_logo.png" alt="Dojo Logo" className="dojo-logo" />
        <div className="welcome-text">
          <h1 className="stylish-font">Discover Your Path</h1>
          <p className="sub-text">Discover your ideal tech career path with Standex Dojo. Our AI-driven platform filters through options to find the courses that best suit your goals, ensuring you gain valuable, applicable skills quickly. Embark on a tailored learning journey that transforms your curiosity into expertise. Join Standex Dojo and start building real skills today.</p>
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
        <div className="cards">
          <Link to="/dojo/learning-path" className="card-link">
            <img src="/images/Learning Path Card.svg" alt="Learning Path" className="card" />
          </Link>
          <div className="card-link" onClick={toggleChatbot}>
            <img src="/images/Interactive Dojo Card.svg" alt="Interactive Dojo" className="card" />
          </div>
        </div>
      </div>

      {chatbotVisible && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h2>Chatbot</h2>
            <span className="close" onClick={toggleChatbot}>&times;</span>
          </div>
          <div className="chatbot-content">
            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_sensei/webchat?__version__=2"
              frameBorder="0"
              title="Dojo Chatbot"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DojoPage;
