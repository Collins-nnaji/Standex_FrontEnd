import React from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const JobBoard = () => {
  return (
    <div className="job-board">
      <Header />
      <h1>Job Board</h1>
      <p>Find your dream job here!</p>
      <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
      <Footer />
    </div>
  );
};

export default JobBoard;
