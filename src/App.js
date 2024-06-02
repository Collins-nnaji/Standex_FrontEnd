import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DojoPage from './pages/DojoPage/DojoPage';
import JobBoard from './pages/JobBoard/JobBoard';
import TechElevate from './pages/TechElevate/TechElevate';
import DojoChatbot from './pages/DojoPage/DojoChatbot/DojoChatbot';
import LearningPath from './pages/DojoPage/LearningPath/LearningPath';
import ProgressTracking from './pages/DojoPage/ProgressTracking/ProgressTracking';
import Community from './pages/DojoPage/Community/Community';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';  // Correct import path

const App = () => {
  return (
    <Router>
      <ScrollToTop />  {/* Place ScrollToTop inside Router */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dojo" element={<DojoPage />} />
          <Route path="/dojo/chatbot" element={<DojoChatbot />} />
          <Route path="/dojo/learning-path" element={<LearningPath />} />
          <Route path="/dojo/progress-tracking" element={<ProgressTracking />} />
          <Route path="/dojo/community" element={<Community />} />
          <Route path="/tech-elevate" element={<TechElevate />} />
          <Route path="/job-board" element={<JobBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
