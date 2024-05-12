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
                <img src="Learning.webp" alt="Learning at Standex Dojo" className="learning-image"/>
                <div className="features">
                    <h2>Features</h2>
                    <ul>
                        <li><strong>AI-driven Course Recommendations:</strong> Utilize cutting-edge artificial intelligence to receive personalized course suggestions tailored to your skills, career goals, and learning pace, ensuring an optimal educational pathway.</li>
                        <li><strong>Interactive Learning Paths:</strong> Engage with dynamic, customizable learning paths that adapt to your progress and interests, featuring interactive elements such as quizzes, hands-on projects, and real-time feedback to enhance your learning experience.</li>
                        <li><strong>Community Support and Networking:</strong> Gain access to a vibrant community of learners and professionals. Participate in forums, collaborative projects, and networking events that foster connections with industry experts and peers worldwide.</li>
                        <li><strong>Progress Tracking and Achievements:</strong> Monitor your learning progress with an advanced tracking system that visually displays your achievements and milestones. Get motivated by earning badges and certificates as you master new skills and complete courses.</li>
                    </ul>
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
