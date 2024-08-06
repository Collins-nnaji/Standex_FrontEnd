import React from 'react';
import './GuidedQuestions.css';
import ButtonComponent from '../../components/Button/ButtonComponent';

const GuidedQuestions = ({ questions, responses, onResponseChange, onSubmit, buttonText }) => {
  const handleChange = (questionId, value) => {
    onResponseChange(questionId, value);
  };

  const handleMultiChange = (questionId, selectedOptions) => {
    const values = Array.from(selectedOptions).map(option => option.value);
    onResponseChange(questionId, values);
  };

  const allQuestionsAnswered = questions.every((question) => {
    const response = responses[question.id];
    if (Array.isArray(response)) {
      return response.length > 0;
    }
    return response;
  });

  return (
    <div className="guided-questions-section">
      <h2>Guided Questions</h2>
      {questions.map((question) => (
        <div key={question.id} className="question">
          <label>{question.text}</label>
          {question.type === 'dropdown' && question.multiple ? (
            <select
              multiple
              value={responses[question.id] || []}
              onChange={(e) => handleMultiChange(question.id, e.target.selectedOptions)}
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          ) : question.type === 'dropdown' ? (
            <select
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={responses[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
            />
          )}
        </div>
      ))}
      <ButtonComponent onClick={onSubmit} text={buttonText} disabled={!allQuestionsAnswered} />
    </div>
  );
};

export default GuidedQuestions;
