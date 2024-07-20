import React, { useState } from 'react';
import './DojoPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GuidedQuestions from './GuidedQuestions';
import PDFGenerator from './PDFGenerator';
import { questions } from './Questions';
import ButtonComponent from '../../components/Button/ButtonComponent'; // Import the new ButtonComponent

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
              <ButtonComponent onClick={() => setShowLearningPath(false)} text="Back" />
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
                  <ButtonComponent onClick={handleDownloadPDF} text="Download as PDF" />
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
                Unlock Your Tech Potential with Dojo.<br />
                Experience personalized learning paths,<br />
                skill assessments, project builders,<br />
                and career advice from our AI-driven platform.<br />
                Start mastering real skills today with Dojo.
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
            <div className="feature-header">
              <h2>Our Key Features</h2>
            </div>
            <div className="feature-button-card" onClick={() => handleFeatureSelection('learningPath')}>
              <div className="feature-icon">&#128640;</div>
              <ButtonComponent text="Generate Learning Path" />
              <p>Generate a tailored learning path based on your goals and preferences.</p>
            </div>
            <div className="feature-button-card" onClick={() => handleFeatureSelection('skillAssessment')}>
              <div className="feature-icon">&#127891;</div>
              <ButtonComponent text="Skill Assessment Quiz" />
              <p>Assess your current skills and identify areas for improvement.</p>
            </div>
            <div className="feature-button-card" onClick={() => handleFeatureSelection('projectBuilder')}>
              <div className="feature-icon">&#128736;</div>
              <ButtonComponent text="Project Builder" />
              <p>Build and manage projects to apply your skills in real-world scenarios.</p>
            </div>
            <div className="feature-button-card" onClick={() => handleFeatureSelection('resourceLibrary')}>
              <div className="feature-icon">&#128218;</div>
              <ButtonComponent text="Resource Library" />
              <p>Access a curated library of resources to support your learning.</p>
            </div>
            <div className="feature-button-card" onClick={() => handleFeatureSelection('careerAdvice')}>
              <div className="feature-icon">&#128104;&#127979;</div>
              <ButtonComponent text="Career Advice" />
              <p>Get personalized career advice to advance your professional journey.</p>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default DojoPage;
