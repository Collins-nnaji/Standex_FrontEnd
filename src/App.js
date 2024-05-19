import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DojoPage from './pages/DojoPage/DojoPage';
import JobBoard from './pages/JobBoard/JobBoard';
import ResumeBuilder from './pages/ResumeBuilder/ResumeBuilder';
import DojoChatbot from './pages/DojoPage/DojoChatbot/DojoChatbot';
import LearningPath from './pages/DojoPage/LearningPath/LearningPath';
import ProgressTracking from './pages/DojoPage/ProgressTracking/ProgressTracking';
import Community from './pages/DojoPage/Community/Community';
import TemplateGallery from './pages/ResumeBuilder/TemplateGallery/TemplateGallery';
import ResumeEditor from './pages/ResumeBuilder/ResumeEditor/ResumeEditor';
import ProfileSetup from './pages/ResumeBuilder/ProfileSetup/ProfileSetup';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dojo" element={<DojoPage />} />
          <Route path="/dojo/chatbot" element={<DojoChatbot />} />
          <Route path="/dojo/learning-path" element={<LearningPath />} />
          <Route path="/dojo/progress-tracking" element={<ProgressTracking />} />
          <Route path="/dojo/community" element={<Community />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/resume-builder/template-gallery" element={<TemplateGallery />} />
          <Route path="/resume-builder/resume-editor" element={<ResumeEditor />} />
          <Route path="/resume-builder/profile-setup" element={<ProfileSetup />} />

          <Route path="/job-board" element={<JobBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
