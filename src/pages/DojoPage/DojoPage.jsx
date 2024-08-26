// src/pages/DojoPage/DojoPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';
import GuidedQuestions from './GuidedQuestions';
import PDFGenerator from './PDFGenerator';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import { questions } from './Questions';
import Lottie from 'react-lottie';
import animationData from './lottie-animations/dojo-animation.json';

const DojoPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [guidedResponses, setGuidedResponses] = useState({});
  const [gptResponse, setGptResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('features');
  const [animationComplete, setAnimationComplete] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleGuidedResponseChange = (questionId, response) => {
    setGuidedResponses({ ...guidedResponses, [questionId]: response });
  };

  const handleGuidedQuestionsSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://backend-pearl-chi.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feature: selectedFeature,
          questions: questions[selectedFeature].map(q => q.text),
          responses: questions[selectedFeature].map(q => guidedResponses[q.id])
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      setGptResponse(data.response);
    } catch (err) {
      setError(err.message || 'An error occurred while generating content.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    const pdfBlob = PDFGenerator(userName, selectedFeature, gptResponse);
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${selectedFeature.replace(/\s+/g, '_').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
    setGuidedResponses({});
    setGptResponse('');
    setError(null);
    setActiveTab('content');
  };

  const renderFeatureContent = () => {
    if (!selectedFeature) return null;

    const featureQuestions = questions[selectedFeature];

    if (!featureQuestions || featureQuestions.length === 0) {
      return <div className="dojo-no-questions">No questions available for this feature.</div>;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="dojo-feature-content"
      >
        <h2 className="dojo-feature-title">{selectedFeature}</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="dojo-name-input"
        />
        <GuidedQuestions
          questions={featureQuestions}
          responses={guidedResponses}
          onResponseChange={handleGuidedResponseChange}
          onSubmit={handleGuidedQuestionsSubmit}
          buttonText={`Generate ${selectedFeature}`}
        />

        {loading && (
          <div className="dojo-loading-overlay">
            <Lottie 
              options={{
                loop: true,
                autoplay: true, 
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              height={200}
              width={200}
            />
            <p className="dojo-loading-text">Generating your content...</p>
          </div>
        )}

        <AnimatePresence>
          {gptResponse && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="dojo-gpt-response"
            >
              <h3 className="dojo-response-title">Generated {selectedFeature}</h3>
              <div className="dojo-terminal-window">
                <div className="dojo-terminal-header">
                  <span className="dojo-terminal-button"></span>
                  <span className="dojo-terminal-button"></span>
                  <span className="dojo-terminal-button"></span>
                </div>
                <div className="dojo-terminal-content">
                  <p className="dojo-response-text">{gptResponse}</p>
                </div>
              </div>
              <button onClick={handleDownloadPDF} className="dojo-download-button">
                Download as PDF
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="dojo-error-message">{error}</p>}
      </motion.div>
    );
  };

  return (
    <div className="dojo-page">
      <Header />
      <main className="dojo-main-content">
        <AnimatePresence>
          {!animationComplete && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="dojo-intro-animation"
            >
              <Lottie 
                options={{
                  loop: false,
                  autoplay: true, 
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                height={400}
                width={400}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {animationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="dojo-content-wrapper"
          >
            <WelcomeSection />

            <div className="dojo-tab-container">
              <button 
                className={`dojo-tab ${activeTab === 'features' ? 'dojo-active' : ''}`} 
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`dojo-tab ${activeTab === 'content' ? 'dojo-active' : ''}`} 
                onClick={() => setActiveTab('content')}
              >
                Generated Content
              </button>
            </div>

            {activeTab === 'features' && (
              <FeatureGrid onFeatureSelect={handleFeatureSelect} />
            )}

            {activeTab === 'content' && renderFeatureContent()}
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DojoPage;