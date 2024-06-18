import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DojoPage from './pages/DojoPage/DojoPage';
import JobBoard from './pages/JobBoard/JobBoard';
import TechElevate from './pages/TechElevate/TechElevate';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';  // Correct import path

const App = () => {
  return (
    <Router>
      <ScrollToTop />  {/* Place ScrollToTop inside Router */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dojo" element={<DojoPage />} />
          <Route path="/tech-elevate" element={<TechElevate />} />
          <Route path="/job-board" element={<JobBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
