import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure you have the CSS file for custom styling

function Home() {
    const navigate = useNavigate(); // Hook for navigation

    const handleGetStartedClick = () => {
        navigate('/signup'); // Redirect to the signup page
    };

    return (
        <div className="container"> {/* Container wraps all content */}
            <div className="home">
                <h1>Welcome to Standex Dojo</h1>
                <p>Discover your ideal tech career path with Standex Dojo.<br />
                    Our AI-driven platform filters through countless options to find the courses that best suit your goals, ensuring you gain valuable, applicable skills quickly.<br />
                    Embark on a tailored learning journey that transforms your curiosity into expertise.<br />
                    Join Standex Dojo and start building real skills today.
                </p>
                <img src="/Learning.png" alt="Learning at Standex Dojo" className="learning-image"/>
                <div className="why-choose">
                    <h2>Why Choose Standex Dojo</h2>
                    <p>At Standex Dojo, we are committed to providing an unparalleled learning experience tailored to your individual needs. Our platform stands out because of our focus on personalized education, community support, and comprehensive progress tracking. Here are a few reasons why you should choose Standex Dojo:</p>
                    <div className="feature-images">
                        <img src="/Frame1.svg" alt="AI-driven Course Recommendations" className="feature-image"/>
                        <img src="/Frame2.svg" alt="Interactive Learning Paths" className="feature-image"/>
                        <img src="/Frame3.svg" alt="Community Support and Networking" className="feature-image"/>
                        <img src="/Frame4.svg" alt="Progress Tracking and Achievements" className="feature-image"/>
                    </div>
                </div>
                <div className="demo">
                    <h3>Interactive Demo</h3>
                    <p>Sign up or log in to Standex Dojo to discover your ideal tech career path and embark on a tailored learning journey. Our AI-driven platform filters through countless options to find the courses that best suit your goals, ensuring you gain valuable, applicable skills quickly.</p>
                    <button onClick={handleGetStartedClick}>Get Started</button>
                    <div>
                        <h4>Watch Our Introductory Video</h4>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.loom.com/embed/2f7ff49a0466448dba8e3825558a2067?sid=35eee7ac-507f-4578-ae54-597c824e3eff"
                                frameBorder="0"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Standex Dojo Introductory Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
                {/* About Us Section */}
                <div className="about">
                    <h2>About Us</h2>
                    <p>Standex Dojo envisions a world where anyone can unlock their full potential through accessible, effective, and personalised tech education. Our mission is to empower individuals by providing tools and resources that foster an environment of continuous learning and innovation.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
