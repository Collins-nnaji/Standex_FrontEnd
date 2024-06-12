import React, { useState, useEffect } from 'react';
import './LearningPath.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Chatbot from './Chatbot';
import GuidedQuestions from './GuidedQuestions';
import LearningPlan from './LearningPlan';
import Payment from './Payment';
import PDFGenerator from './PDFGenerator';

const questions = [
    { id: 1, text: "What are your career goals?" },
    { id: 2, text: "What is your current level of experience?" },
    { id: 3, text: "What topics are you interested in learning?" },
    { id: 4, text: "How much time can you dedicate weekly to learning?" },
    { id: 5, text: "Do you prefer video lessons or written content?" },
];

const LearningPath = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [guidedResponses, setGuidedResponses] = useState({});
    const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
    const [pdfData, setPdfData] = useState(null);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSendMessage = async (message) => {
        if (message.trim() === '') return;

        const newMessages = [...messages, { user: 'user', text: message }];
        setMessages(newMessages);

        try {
            const response = await fetch('https://backend-pearl-chi.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (response.ok) {
                const data = await response.json();
                const updatedMessages = [...newMessages, { user: 'bot', text: data.response }];
                setMessages(updatedMessages);
            } else {
                console.error('Error in response from server:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleInput = async () => {
        if (input.trim() === '') return;
        await handleSendMessage(input);
        setInput('');
    };

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

        await handleSendMessage(formattedMessage);
        setQuestionsAnswered(true);
    };

    const handlePaymentSuccess = () => {
        setIsPaymentCompleted(true);
        const learningPlan = generateLearningPlan(messages);
        const pdf = PDFGenerator(learningPlan);
        setPdfData(pdf);
    };

    const generateLearningPlan = (messages) => {
        // Generate the learning plan based on chatbot messages
        return { /* learning plan data */ };
    };

    return (
        <div className="learning-path-page">
            <Header />
            <div className="main-container">
                <div className="content-container">
                    {!questionsAnswered ? (
                        <GuidedQuestions
                            responses={guidedResponses}
                            onResponseChange={handleGuidedResponseChange}
                            onSubmit={handleGuidedQuestionsSubmit}
                        />
                    ) : (
                        <>
                            <Chatbot messages={messages} input={input} setInput={setInput} onSendMessage={handleInput} />
                            <LearningPlan pdfData={pdfData} />
                            {!isPaymentCompleted && <Payment onPaymentSuccess={handlePaymentSuccess} />}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LearningPath;
