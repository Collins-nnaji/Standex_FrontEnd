import React from 'react';
import './ChatbotPage.css'; // Ensure this path is correct
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <Header />
      <div className="iframe-container">
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_sensei/webchat?__version__=2"
          frameBorder="0"
          title="Dojo Chatbot"
          style={{ width: '100%', height: '100vh' }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ChatbotPage;
