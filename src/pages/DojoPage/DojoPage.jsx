import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid';
import GuidedQuestions from './GuidedQuestions';
import PDFGenerator from './PDFGenerator';
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
    setGuidedResponses({});  // Clear previous responses
    setGptResponse('');  // Clear previous GPT response
    setError(null);  // Clear any previous errors
    setActiveTab('content');
  };

  const renderFeatureContent = () => {
    if (!selectedFeature) return null;

    const featureQuestions = questions[selectedFeature];

    if (!featureQuestions || featureQuestions.length === 0) {
      return <div>No questions available for this feature.</div>;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="feature-content"
      >
        <h2>{selectedFeature}</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="name-input"
        />
        <GuidedQuestions
          questions={featureQuestions}
          responses={guidedResponses}
          onResponseChange={handleGuidedResponseChange}
          onSubmit={handleGuidedQuestionsSubmit}
          buttonText={`Generate ${selectedFeature}`}
        />

        {loading && (
          <div className="loading-overlay">
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
            <p>Generating your content...</p>
          </div>
        )}

        <AnimatePresence>
          {gptResponse && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="gpt-response"
            >
              <h3>Generated {selectedFeature}</h3>
              <p className="response-text">{gptResponse}</p>
              <button onClick={handleDownloadPDF} className="download-button">Download as PDF</button>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="error-message">{error}</p>}
      </motion.div>
    );
  };

  return (
    <div className="dojo-page">
      <Header />
      <main className="main-content">
        <AnimatePresence>
          {!animationComplete && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="intro-animation"
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
          >
            <img src="/images/DojoLogo.svg" alt="Dojo Logo" className="dojo-logo" />
            <div className="welcome-section">
              <h1 className="title">Discover Your Path</h1>
              <p className="subtitle">
                Unlock Your Tech Potential with Dojo. Experience personalized learning paths,
                skill assessments, project builders, and career advice from our AI-driven platform.
                Start mastering real skills today with Dojo.
              </p>
            </div>

            <div className="tab-container">
              <button 
                className={`tab ${activeTab === 'features' ? 'active' : ''}`} 
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`tab ${activeTab === 'content' ? 'active' : ''}`} 
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