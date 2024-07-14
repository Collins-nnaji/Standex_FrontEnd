import React, { useState } from 'react';
import './TechElevate.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';

const TechElevate = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const handleCheckout = (url) => (event) => {
    event.preventDefault();
    window.location.href = url;
  };

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="tech-elevate">
      <Header />
      <main className="page-container">
        <h1 className="stylish-font">Get Real Skills with Tech Elevate</h1>
        <p className="sub-text">
          Welcome to Tech Elevate, your destination for practical technology training programs taught by industry professionals. Gain real-world skills for immediate job placement.
        </p>
        <section className="why-choose-us">
          <h2>Why Choose Tech Elevate</h2>
          <div className="cards">
            <div className="card-container">
              <p className="card-title">Microsoft Partnership</p>
              <p className="card-content">Learn with the latest tools and resources, ensuring you're prepared for the tech world.</p>
            </div>
            <div className="card-container">
              <p className="card-title">Access to Tools</p>
              <p className="card-content">Get hands-on experience with Power BI, Azure, SQL, and more for one year.</p>
            </div>
            <div className="card-container">
              <p className="card-title">Job References</p>
              <p className="card-content">Stand out to employers with real job experience and professional references.</p>
            </div>
            <div className="card-container">
              <p className="card-title">Free Resources</p>
              <p className="card-content">Receive textbooks and materials to support your learning journey.</p>
            </div>
          </div>
        </section>

        <div className="courses">
          <div className="course">
            <img src="/images/Businessintelligence.svg" alt="Business Intelligence" className="course-img" />
            <h2>Business Intelligence</h2>
            <Accordion
              title="Power BI"
              content={[
                <ul className="custom-bullets">
                  <li>Introduction to Power BI, navigating the interface, and creating simple reports.</li>
                  <li>Importing data from various sources, data transformation techniques, and data cleaning.</li>
                  <li>Creating interactive reports and dashboards with real-world data sets.</li>
                  <li>Advanced visualization techniques, publishing reports, and sharing securely within organizations.</li>
                </ul>
              ]}
            />
            <Accordion
              title="SQL"
              content={[
                <ul className="custom-bullets">
                  <li>Understanding SQL syntax and database fundamentals through hands-on exercises.</li>
                  <li>Writing basic SQL queries to retrieve and manipulate data from databases.</li>
                  <li>Performing advanced SQL operations such as complex joins, subqueries, and optimization techniques.</li>
                  <li>Designing and managing databases, implementing best practices for scalability and efficiency.</li>
                </ul>
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/bIYaGJeDe0X47gQ5kn')} className="button-common">Register Now</button>
              <a href="https://teams.live.com/l/community/FEAMvjBvDFf94sroAI" target="_blank" rel="noopener noreferrer" className="button-common">Enquiry</a>
            </div>
          </div>

          <div className="course">
            <img src="/images/Datascience.svg" alt="Data Science" className="course-img" />
            <h2>Data Science</h2>
            <Accordion
              title="Machine Learning"
              content={[
                <ul className="custom-bullets">
                  <li>Learning the basics of machine learning concepts and algorithms through practical examples.</li>
                  <li>Data preprocessing and feature engineering, including handling missing data and feature scaling.</li>
                  <li>Model selection and evaluation, using techniques to choose and validate the best models.</li>
                  <li>Applying advanced machine learning techniques and deploying models to real-world scenarios.</li>
                </ul>
              ]}
            />
            <Accordion
              title="Large Language Models (LLM) and Prompt Engineering"
              content={[
                <ul className="custom-bullets">
                  <li>Exploring the architectures and capabilities of large language models with practical tasks.</li>
                  <li>Training and fine-tuning LLMs, applying them to various natural language processing tasks.</li>
                  <li>Designing and optimizing prompts for different applications, focusing on real-world use cases.</li>
                  <li>Addressing ethical considerations, bias mitigation, and evaluating model performance in practical scenarios.</li>
                </ul>
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/3csaGJeDegW2cBa002')} className="button-common">Register Now</button>
              <a href="https://teams.live.com/l/community/FEA6KyxOLpqI-JlggI" target="_blank" rel="noopener noreferrer" className="button-common">Enquiry</a>
            </div>
          </div>

          <div className="course">
            <img src="/images/PowerPlatform.svg" alt="Power Platform" className="course-img" />
            <h2>Power Platform</h2>
            <Accordion
              title="Power Apps"
              content={[
                <ul className="custom-bullets">
                  <li>Overview of Power Apps, exploring its ecosystem and capabilities through hands-on projects.</li>
                  <li>Designing and building canvas apps, creating user-friendly interfaces connected to data sources.</li>
                  <li>Developing model-driven apps, working on complex applications with sophisticated data models.</li>
                  <li>Using formulas and expressions, publishing apps, and managing them for secure and scalable deployment.</li>
                </ul>
              ]}
            />
            <Accordion
              title="Power Automate"
              content={[
                <ul className="custom-bullets">
                  <li>Introduction to Power Automate, creating and managing basic flows to automate tasks.</li>
                  <li>Building complex workflows with conditions, loops, and approval processes.</li>
                  <li>Implementing error handling and optimization techniques for efficient workflow management.</li>
                  <li>Applying security best practices and governance policies to automated processes.</li>
                </ul>
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/bIY1693YAcFMbx66os')} className="button-common">Register Now</button>
              <a href="https://teams.live.com/l/community/FEAvyQ9o0YnEisLOgI" target="_blank" rel="noopener noreferrer" className="button-common">Enquiry</a>
            </div>
          </div>

          <div className="course">
            <img src="/images/EnterpriseArchitecture.svg" alt="Enterprise Architecture" className="course-img" />
            <h2>Enterprise Architecture</h2>
            <Accordion
              title="Solution Architecture"
              content={[
                <ul className="custom-bullets">
                  <li>Learning architecture design fundamentals, including key principles and methodologies.</li>
                  <li>Designing scalable and resilient systems using cloud computing and infrastructure best practices.</li>
                  <li>Ensuring security and compliance with industry standards in architecture design.</li>
                  <li>Focusing on integration and interoperability, and honing project management and communication skills.</li>
                </ul>
              ]}
            />
            <Accordion
              title="Data Architecture"
              content={[
                <ul className="custom-bullets">
                  <li>Mastering data architecture fundamentals with practical applications.</li>
                  <li>Creating efficient and scalable data models and designs.</li>
                  <li>Implementing data integration and ETL processes for smooth data flow.</li>
                  <li>Managing data storage, ensuring database security, and applying data governance best practices.</li>
                </ul>
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/cN29CF2Uw5dk30A6op')} className="button-common">Register Now</button>
              <a href="https://teams.live.com/l/community/FEA4z3tHlusqz0UBAI" target="_blank" rel="noopener noreferrer" className="button-common">Enquiry</a>
            </div>
          </div>
        </div>

        <section className="join-community">
          <div className="community-card">
            <h2 className="community-title">Join the TechElevate Community</h2>
            <p className="community-content">
              TechElevate is a vibrant community dedicated to empowering individuals interested in getting digital skills. Our mission is to provide guidance, share knowledge, and foster a collaborative environment where members can enhance their technical skills and achieve their career goals.
            </p>
            <a href="https://teams.live.com/l/community/FDAOeGTjNExdVTcUwI" target="_blank" rel="noopener noreferrer" className="community-link">
              Join Now
            </a>
          </div>
        </section>

        <div className="chatbot-container">
          {!chatbotVisible && (
            <div className="chatbot-button" onClick={toggleChatbot}>
              <img src="/images/Chatbot.png" alt="Chatbot" className="chatbot-icon" />
            </div>
          )}
          {chatbotVisible && (
            <div className="chatbot-popup">
              <div className="chatbot-header">
                <h2>Chatbot</h2>
                <span className="close" onClick={toggleChatbot}>&times;</span>
              </div>
              <div className="chatbot-content">
                <iframe
                  src="https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_sensei/webchat?__version__=2"
                  frameBorder="0"
                  title="Tech Elevate Chatbot"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechElevate;
