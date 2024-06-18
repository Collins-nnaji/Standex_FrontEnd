import React from 'react';
import './GuidedQuestions.css';

const GuidedQuestions = ({ questions, responses, onResponseChange, onSubmit, buttonText }) => {
  const handleChange = (questionId, value) => {
    onResponseChange(questionId, value);
  };

  return (
    <div className="guided-questions-section">
      <h2>Guided Questions</h2>
      {questions.map((question) => (
        <div key={question.id} className="question">
          <label>{question.text}</label>
          {question.type === 'dropdown' ? (
            <select
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
              <option value="Other">Other (please specify)</option>
            </select>
          ) : (
            <input
              type="text"
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
            />
          )}
          {responses[question.id] === 'Other' && (
            <input
              type="text"
              placeholder="Please specify"
              value={responses[`${question.id}_other`] || ''}
              onChange={(e) => handleChange(`${question.id}_other`, e.target.value)}
            />
          )}
        </div>
      ))}
      <button onClick={onSubmit}>{buttonText}</button>
    </div>
  );
};

export default GuidedQuestions;
