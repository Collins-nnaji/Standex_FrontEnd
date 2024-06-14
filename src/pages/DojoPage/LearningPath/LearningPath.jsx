import React, { useState } from 'react';
import './LearningPath.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import GuidedQuestions from './GuidedQuestions';
import PDFGenerator from './PDFGenerator';

const questions = [
    { id: 1, text: "What are your career goals?" },
    { id: 2, text: "What is your current level of experience?" },
    { id: 3, text: "What topics are you interested in learning?" },
    { id: 4, text: "How much time can you dedicate weekly to learning?" },
    { id: 5, text: "Do you prefer video lessons or written content?", type: 'dropdown', options: ['Video Lessons', 'Written Content'] },
    { id: 6, text: "What are your preferred learning formats (e.g., videos, articles, interactive exercises)?", type: 'dropdown', options: ['Videos', 'Articles', 'Interactive Exercises'] },
    { id: 7, text: "What is your availability for learning (days of the week, specific hours)?", type: 'dropdown', options: ['Weekdays', 'Weekends', 'Both'] },
    { id: 8, text: "What are your preferred languages for learning materials?", type: 'dropdown', options: ['English', 'Spanish', 'French', 'German', 'Chinese'] },
    { id: 9, text: "What is your budget for learning resources (if any)?", type: 'dropdown', options: ['Free', 'Under $50', 'Under $100', 'No Limit'] },
    { id: 10, text: "Are there any specific courses or topics you want to prioritize?" },
    { id: 11, text: "Do you have any learning disabilities or preferences that we should be aware of?" },
    { id: 12, text: "What is your current proficiency level in the topics you want to learn?" },
];

const LearningPath = () => {
    const [guidedResponses, setGuidedResponses] = useState({});
    const [pdfData, setPdfData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGuidedResponseChange = (questionId, response) => {
        setGuidedResponses({ ...guidedResponses, [questionId]: response });
    };

    const handleGuidedQuestionsSubmit = async () => {
        const formattedMessage = Object.entries(guidedResponses)
            .map(([questionId, response]) => {
                const questionText = questions.find(q => q.id === parseInt(questionId))?.text || '';
                return `${questionText}\n${response}`;
            })
            .join('\n\n'); // Add double newlines between each question-answer pair

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://backend-pearl-chi.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: formattedMessage }),
            });

            if (response.ok) {
                const data = await response.json();
                const pdf = PDFGenerator(data.response);
                setPdfData(pdf);
            } else {
                console.error('Error in response from server:', response.statusText);
                setError('Failed to generate the learning plan.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setError('Failed to generate the learning plan.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="learning-path-page">
            <Header />
            <div className="main-container">
                <div className="content-container">
                    <GuidedQuestions
                        responses={guidedResponses}
                        onResponseChange={handleGuidedResponseChange}
                        onSubmit={handleGuidedQuestionsSubmit}
                    />
                    {loading && <p>Loading...</p>}
                    {pdfData && (
                        <div className="learning-plan-section">
                            <h2>Your Learning Plan</h2>
                            <a href={URL.createObjectURL(pdfData)} download="learning_plan.pdf">Download Learning Plan</a>
                        </div>
                    )}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LearningPath;
