import React from 'react';
import './Chatbot.css';

const Chatbot = ({ messages, input, setInput, onSendMessage }) => (
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
                onKeyPress={(e) => e.key === 'Enter' ? onSendMessage() : null}
                placeholder="Type your message here..."
            />
            <button onClick={onSendMessage}>Send</button>
        </div>
    </div>
);

export default Chatbot;
