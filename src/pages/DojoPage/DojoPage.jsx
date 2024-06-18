import React, { useState } from 'react';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GuidedQuestions from './GuidedQuestions';
import PDFGenerator from './PDFGenerator';
import { questions } from './Questions';

const DojoPage = () => {
  const [showLearningPath, setShowLearningPath] = useState(false);
  const [userName, setUserName] = useState('');
  const [guidedResponses, setGuidedResponses] = useState({});
  const [gptResponse, setGptResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleGuidedResponseChange = (questionId, response) => {
    setGuidedResponses({ ...guidedResponses, [questionId]: response });
  };

  const handleGuidedQuestionsSubmit = async () => {
    const formattedMessage = Object.entries(guidedResponses)
      .map(([questionId, response]) => {
        const questionText = questions[selectedFeature].find(q => q.id === parseInt(questionId))?.text || '';
        return `${questionText}\n${response}`;
      })
      .join('\n\n'); // Add double newlines between each question-answer pair

    const prompt = `Create a ${selectedFeature.replace(/([A-Z])/g, ' $1')} with these details:\n\n${formattedMessage}`;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://backend-pearl-chi.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        setGptResponse(data.response);
      } else {
        console.error('Error in response from server:', response.statusText);
        setError('Failed to generate the document.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to generate the document.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = () => {
    const formattedMessage = Object.entries(guidedResponses)
      .map(([questionId, response]) => {
        const questionText = questions[selectedFeature].find(q => q.id === parseInt(questionId))?.text || '';
        return `${questionText}\n${response}`;
      })
      .join('\n\n'); // Add double newlines between each question-answer pair

    const topic = guidedResponses[3] || `${selectedFeature.replace(/([A-Z])/g, ' $1')}`;

    const pdf = PDFGenerator(userName, formattedMessage, gptResponse, topic);
    const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
    const pdfURL = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = `${userName}_${topic}.pdf`;
    link.click();
  };

  const handleFeatureSelection = (feature) => {
    setSelectedFeature(feature);
    setShowLearningPath(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderFeature = () => {
    if (!selectedFeature) return null;

    return (
      <GuidedQuestions
        questions={questions[selectedFeature]}
        responses={guidedResponses}
        onResponseChange={handleGuidedResponseChange}
        onSubmit={handleGuidedQuestionsSubmit}
        buttonText={`Generate ${selectedFeature.replace(/([A-Z])/g, ' $1')}`}
      />
    );
  };

  return (
    <div className="dojo-page">
      <Header />
      {showLearningPath ? (
        <div className="learning-path-section">
          <div className="main-container">
            <div className="content-container">
              <button onClick={() => setShowLearningPath(false)} className="back-button">
                Back
              </button>
              <h2>{selectedFeature && selectedFeature.replace(/([A-Z])/g, ' $1')}</h2>
              <div className="user-info">
                <label>
                  Your Name:
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </label>
              </div>
              {renderFeature()}
              {loading && <p>Loading...</p>}
              {gptResponse && (
                <div className="gpt-response-section">
                  <h2>Generated {selectedFeature && selectedFeature.replace(/([A-Z])/g, ' $1')}</h2>
                  <p>{gptResponse}</p>
                  <button onClick={handleDownloadPDF}>Download as PDF</button>
                </div>
              )}
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      ) : (
        <>
          <img src="/images/DojoLogo.svg" alt="Dojo Logo" className="dojo-logo" />
          <div className="welcome-section">
            <div className="welcome-text">
              <h1 className="stylish-font">Discover Your Path</h1>
              <p className="sub-text">
                Unlock Your Tech Potential with Dojo. Our AI-driven platform crafts personalized learning paths, skill assessments, project builders, and career advice to accelerate your journey. Start mastering real skills today with Dojo.
              </p>
            </div>
          </div>
          <div className="features-container">
            <h2>Features</h2>
            <div className="frames">
              <img src="/images/Frame1.svg" alt="Feature 1" className="frame" />
              <img src="/images/Frame2.svg" alt="Feature 2" className="frame" />
            </div>
            <img src="/images/Learning.png" alt="Learning" className="learning-image" />
          </div>
          <div className="feature-buttons">
            <button onClick={() => handleFeatureSelection('learningPath')}>Generate Learning Path</button>
            <button onClick={() => handleFeatureSelection('skillAssessment')}>Skill Assessment Quiz</button>
            <button onClick={() => handleFeatureSelection('projectBuilder')}>Project Builder</button>
            <button onClick={() => handleFeatureSelection('resourceLibrary')}>Resource Library</button>
            <button onClick={() => handleFeatureSelection('careerAdvice')}>Career Advice</button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default DojoPage;
