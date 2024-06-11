import React, { useState, useEffect } from 'react';
import './LearningPath.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const LearningPath = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        // Dynamically load the Stripe script
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { user: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await fetch('https://backend-pearl-chi.vercel.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (response.ok) {
                const data = await response.json();
                const updatedMessages = [...newMessages, { user: 'bot', text: data.response }];
                setMessages(updatedMessages);
                setChatHistory([...chatHistory, { id: chatHistory.length + 1, messages: updatedMessages }]);
            } else {
                console.error('Error in response from server:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleChatHistoryClick = (id) => {
        const selectedChat = chatHistory.find(chat => chat.id === id);
        if (selectedChat) {
            setMessages(selectedChat.messages);
        }
    };

    return (
        <div className="learning-path-page">
            <Header />
            <div className="main-container">
                <div className="chat-history-section">
                    <div className="logo-section">
                        <img src="/images/dojo_logo.png" alt="Dojo Logo" className="dojo-logo" />
                    </div>
                    <h2>Chat History</h2>
                    <ul>
                        {chatHistory.map((chat) => (
                            <li key={chat.id} onClick={() => handleChatHistoryClick(chat.id)}>
                                Chat {chat.id}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content-container">
                    <div className="chat-container">
                        <div className="chat-window">
                            {messages.map((message, index) => (
                                <div key={index} className={`chat-message ${message.user}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
                                placeholder="Type your message here..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                    <div className="learning-path-section">
                        <h2>Purchase Your Learning Plan</h2>
                        <div className="stripe-button">
                            <stripe-buy-button
                                buy-button-id="buy_btn_1PPrc5Rt3Wt49gX5TaXcGPFl"
                                publishable-key="pk_live_51PNIDCRt3Wt49gX54QBZsb623PzO2rPuBZmcs3EvjEUNpIFZFU5EDEhtIA2ROScyYe4M99xWm5DP0O4rpdHeZqtM00ihCT1urk"
                            ></stripe-buy-button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LearningPath;
