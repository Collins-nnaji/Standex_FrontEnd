import React from 'react';
import './DataAI.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const DataAI = () => {
  return (
    <div className="data-ai">
      <Header />
      <h1>Data & AI</h1>
      <img src="/images/Data and Ai page.svg" alt="Data and AI" className="service-image" />
      <p>Unlock insights and intelligence with our Data & AI services.</p>
      <Footer />
    </div>
  );
};

export default DataAI;
