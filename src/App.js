import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DojoPage from './pages/DojoPage/DojoPage';
import JobBoard from './pages/JobBoard/JobBoard';
import TechElevate from './pages/TechElevate/TechElevate';
import AdminPage from './pages/Admin/AdminPage';  // Import the AdminPage
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const trackPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-LLNKZEJCBP', {
      page_path: url,
    });
  }
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dojo" element={<DojoPage />} />
        <Route path="/tech-elevate" element={<TechElevate />} />
        <Route path="/job-board" element={<JobBoard />} />
        <Route path="/admin" element={<AdminPage />} />  {/* Add the AdminPage route */}
      </Routes>
    </div>
  );
};

export default App;
