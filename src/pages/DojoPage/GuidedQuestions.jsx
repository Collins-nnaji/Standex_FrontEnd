import React from 'react';
import { motion } from 'framer-motion';

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

  // Add a check for questions being undefined or empty
  const allQuestionsAnswered = questions && questions.length > 0 && questions.every((question) => {
    const response = responses[question.id];
    if (Array.isArray(response)) {
      return response.length > 0;
    }
    return response;
  });

  // If questions is undefined or empty, render a loading state or message
  if (!questions || questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <motion.div
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
            <select
              id={`question-${question.id}`}
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="select-input"
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={`question-${question.id}`}
              type="text"
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="text-input"
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