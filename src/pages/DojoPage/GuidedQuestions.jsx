import React from 'react';
import { motion } from 'framer-motion';
import './GuidedQuestions.css';

const GuidedQuestions = ({ questions, responses, onResponseChange, onSubmit, buttonText }) => {
  const handleChange = (questionId, value) => {
    onResponseChange(questionId, value);
  };

  const handleMultiChange = (questionId, value) => {
    const currentValues = responses[questionId] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onResponseChange(questionId, newValues);
  };

  const allQuestionsAnswered = questions && questions.length > 0 && questions.every((question) => {
    const response = responses[question.id];
    if (Array.isArray(response)) {
      return response.length > 0;
    }
    return response;
  });

  if (!questions || questions.length === 0) {
    return <div className="loading">Loading questions...</div>;
  }

  return (
    <motion.div
      className="guided-questions-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {questions.map((question) => (
        <div key={question.id} className="question-card">
          <label htmlFor={`question-${question.id}`} className="question-label">
            {question.text}
          </label>
          {question.type === 'dropdown' && question.multiple ? (
            <div className="multi-select">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`multi-select-option ${responses[question.id]?.includes(option) ? "selected" : ""}`}
                  onClick={() => handleMultiChange(question.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : question.type === 'dropdown' ? (
            <div className="single-select">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`single-select-option ${responses[question.id] === option ? "selected" : ""}`}
                  onClick={() => handleChange(question.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              id={`question-${question.id}`}
              type="text"
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="text-input"
              placeholder="Type your answer here..."
            />
          )}
        </div>
      ))}
      <button 
        onClick={onSubmit} 
        disabled={!allQuestionsAnswered}
        className="submit-button"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

export default GuidedQuestions;