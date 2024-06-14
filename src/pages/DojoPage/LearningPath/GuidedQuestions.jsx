import React from 'react';
import './GuidedQuestions.css';

const questions = [
    { id: 1, text: "What are your career goals?", type: 'text' },
    { id: 2, text: "What is your current level of experience?", type: 'text' },
    { id: 3, text: "What topics are you interested in learning?", type: 'text' },
    { id: 4, text: "How much time can you dedicate weekly to learning?", type: 'text' },
    { id: 5, text: "Do you prefer video lessons or written content?", type: 'dropdown', options: ['Video Lessons', 'Written Content'] },
    { id: 6, text: "What are your preferred learning formats?", type: 'dropdown', options: ['Videos', 'Articles', 'Interactive Exercises'] },
    { id: 7, text: "What is your availability for learning?", type: 'dropdown', options: ['Weekdays', 'Weekends', 'Both'] },
    { id: 8, text: "What are your preferred languages for learning materials?", type: 'dropdown', options: ['English', 'Spanish', 'French', 'German', 'Chinese'] },
    { id: 9, text: "What is your budget for learning resources?", type: 'dropdown', options: ['Free', 'Under $50', 'Under $100', 'No Limit'] },
    { id: 10, text: "Are there any specific courses or topics you want to prioritize?", type: 'text' },
    { id: 11, text: "Do you have any learning disabilities or preferences that we should be aware of?", type: 'text' },
    { id: 12, text: "What is your current proficiency level in the topics you want to learn?", type: 'text' },
];

const GuidedQuestions = ({ responses, onResponseChange, onSubmit }) => {
    return (
        <div className="guided-questions-section">
            <h2>Guided Questions</h2>
            {questions.map((question) => (
                <div key={question.id} className="question">
                    <label>{question.text}</label>
                    {question.type === 'dropdown' ? (
                        <select
                            value={responses[question.id] || ''}
                            onChange={(e) => onResponseChange(question.id, e.target.value)}
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
                            onChange={(e) => onResponseChange(question.id, e.target.value)}
                        />
                    )}
                </div>
            ))}
            <button onClick={onSubmit}>Generate Learning Path</button>
        </div>
    );
};

export default GuidedQuestions;
