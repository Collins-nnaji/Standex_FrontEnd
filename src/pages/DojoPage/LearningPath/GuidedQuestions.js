import React from 'react';
import './GuidedQuestions.css';

const questions = [
    { id: 1, text: "What are your career goals?" },
    { id: 2, text: "What is your current level of experience?" },
    { id: 3, text: "What topics are you interested in learning?" },
    { id: 4, text: "How much time can you dedicate weekly to learning?" },
    { id: 5, text: "Do you prefer video lessons or written content?" },
];

const GuidedQuestions = ({ responses, onResponseChange, onSubmit }) => (
    <div className="guided-questions-section">
        <h2>Guided Questions</h2>
        {questions.map((question) => (
            <div key={question.id} className="question">
                <label>{question.text}</label>
                <input
                    type="text"
                    value={responses[question.id] || ''}
                    onChange={(e) => onResponseChange(question.id, e.target.value)}
                />
            </div>
        ))}
        <button onClick={onSubmit}>Submit</button>
    </div>
);

export default GuidedQuestions;
