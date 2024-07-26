import React, { useState } from 'react';
import './TechElevate.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm';
import Modal from '../../components/Modal/Modal';

const TechElevate = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCheckout = (url) => (event) => {
    event.preventDefault();
    window.location.href = url;
  };

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const handleEnquiryClick = (courseName) => {
    setSelectedCourse(courseName);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedCourse('');
  };

  return (
    <div className="tech-elevate">
      <Header />
      <img src="/images/Tech Elevate.png" alt="Tech Elevate Logo" className="techelevatelogo" />
      <main className="page-container">
        <h1 className="stylish-font">Your Gateway to Advanced Tech Skills</h1>
        <p className="sub-text">
          Welcome to Tech Elevate, where industry professionals teach practical technology training programs<br />
          to help you gain real-world skills for immediate job placement.
        </p>

        <section className="why-choose-us">
          <h2>Why Choose Tech Elevate</h2>
          <div className="cards">
            <div className="card-container">
              <img src="/images/microsoft.png" alt="Microsoft Partnership" className="card-icon" />
              <p className="card-title">Microsoft Partnership</p>
              <p className="card-content">Learn with the latest tools and resources, ensuring you're prepared for the tech world.</p>
            </div>
            <div className="card-container">
              <img src="/images/toolsaccess.jpeg" alt="Access to Tools" className="card-icon" />
              <p className="card-title">Access to Tools</p>
              <p className="card-content">Get hands-on experience with Power BI, Azure, SQL, and more for one year.</p>
            </div>
            <div className="card-container">
              <img src="/images/reference.png" alt="Job References" className="card-icon" />
              <p className="card-title">Job References</p>
              <p className="card-content">Stand out to employers with real job experience and professional references.</p>
            </div>
            <div className="card-container">
              <img src="/images/resources.png" alt="Free Resources" className="card-icon" />
              <p className="card-title">Free Resources</p>
              <p className="card-content">Receive textbooks and materials to support your learning journey.</p>
            </div>
          </div>
        </section>

        <section className="career-prospects">
          <h2>Career Prospects & Salary Ranges</h2>
          <div className="prospects-container">
            <div className="prospect">
              <img src="/images/salary-icon.png" alt="Salary Icon" className="prospect-icon" />
              <div className="prospect-info">
                <h3>Business Intelligence Analyst</h3>
                <p>Salary Range: £40,000 - £70,000</p>
                <p>Career prospects in various industries, with a focus on data analysis and strategic decision-making.</p>
              </div>
            </div>
            <div className="prospect">
              <img src="/images/salary-icon.png" alt="Salary Icon" className="prospect-icon" />
              <div className="prospect-info">
                <h3>Data Scientist</h3>
                <p>Salary Range: £50,000 - £90,000</p>
                <p>Opportunities in tech companies, finance, healthcare, and more, focusing on predictive modeling and big data.</p>
              </div>
            </div>
            <div className="prospect">
              <img src="/images/salary-icon.png" alt="Salary Icon" className="prospect-icon" />
              <div className="prospect-info">
                <h3>Power Platform Developer</h3>
                <p>Salary Range: £45,000 - £80,000</p>
                <p>High demand in businesses seeking to automate processes and improve efficiency with custom apps and workflows.</p>
              </div>
            </div>
            <div className="prospect">
              <img src="/images/salary-icon.png" alt="Salary Icon" className="prospect-icon" />
              <div className="prospect-info">
                <h3>Enterprise Architect</h3>
                <p>Salary Range: £60,000 - £100,000</p>
                <p>Key roles in designing and implementing IT infrastructure, ensuring scalability and security.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <h2>Courses Offered</h2>
        </section>
        
        <div className="courses">
          <div className="course">
            <img src="/images/Businessintelligence.svg" alt="Business Intelligence" className="course-img" />
            <h2>Business Intelligence</h2>
            <Accordion
              title="Power BI"
              content={[
                "<ul className='custom-bullets'><li>Introduction to Power BI and creating simple reports.</li><li>Importing data and data transformation techniques.</li><li>Creating interactive reports and dashboards.</li><li>Advanced visualization techniques.</li><li>Publishing reports and sharing securely.</li></ul>"
              ]}
            />
            <Accordion
              title="SQL"
              content={[
                "<ul className='custom-bullets'><li>Understanding SQL syntax and database fundamentals.</li><li>Writing basic SQL queries to manipulate data.</li><li>Performing advanced SQL operations.</li><li>Designing and managing scalable databases.</li><li>Implementing best practices for efficiency.</li></ul>"
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/bIYaGJeDe0X47gQ5kn')} className="button-common">Register Now</button>
              <button onClick={() => handleEnquiryClick('Business_Intelligence')} className="button-common">Enquiry</button>
            </div>
          </div>

          <div className="course">
            <img src="/images/Datascience.svg" alt="Data Science" className="course-img" />
            <h2>Data Science</h2>
            <Accordion
              title="Machine Learning"
              content={[
                "<ul className='custom-bullets'><li>Basics of machine learning concepts and algorithms.</li><li>Data preprocessing and feature engineering.</li><li>Model selection and evaluation techniques.</li><li>Advanced machine learning techniques.</li><li>Deploying models to real-world scenarios.</li></ul>"
              ]}
            />
            <Accordion
              title="Large Language Models (LLM) and Prompt Engineering"
              content={[
                "<ul className='custom-bullets'><li>Exploring architectures of large language models.</li><li>Training and fine-tuning LLMs.</li><li>Designing and optimizing prompts for applications.</li><li>Addressing ethical considerations and bias.</li><li>Evaluating model performance in real-world tasks.</li></ul>"
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/3csaGJeDegW2cBa002')} className="button-common">Register Now</button>
              <button onClick={() => handleEnquiryClick('Data_Science')} className="button-common">Enquiry</button>
            </div>
          </div>

          <div className="course">
            <img src="/images/PowerPlatform.svg" alt="Power Platform" className="course-img" />
            <h2>Power Platform</h2>
            <Accordion
              title="Power Apps"
              content={[
                "<ul className='custom-bullets'><li>Overview of Power Apps and its ecosystem.</li><li>Designing and building canvas apps.</li><li>Developing model-driven apps.</li><li>Using formulas and expressions effectively.</li><li>Publishing and managing apps securely.</li></ul>"
              ]}
            />
            <Accordion
              title="Power Automate"
              content={[
                "<ul className='custom-bullets'><li>Introduction to Power Automate and creating flows.</li><li>Building complex workflows with conditions.</li><li>Implementing error handling in workflows.</li><li>Optimizing workflows for efficiency.</li><li>Applying security best practices to flows.</li></ul>"
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/bIY1693YAcFMbx66os')} className="button-common">Register Now</button>
              <button onClick={() => handleEnquiryClick('Power_Platform')} className="button-common">Enquiry</button>
            </div>
          </div>

          <div className="course">
            <img src="/images/EnterpriseArchitecture.svg" alt="Enterprise Architecture" className="course-img" />
            <h2>Enterprise Architecture</h2>
            <Accordion
              title="Solution Architecture"
              content={[
                "<ul className='custom-bullets'><li>Learning architecture design fundamentals.</li><li>Designing scalable and resilient systems.</li><li>Ensuring security and compliance in design.</li><li>Focusing on integration and interoperability.</li><li>Honing project management skills.</li></ul>"
              ]}
            />
            <Accordion
              title="Data Architecture"
              content={[
                "<ul className='custom-bullets'><li>Mastering data architecture fundamentals.</li><li>Creating efficient and scalable data models.</li><li>Implementing data integration and ETL processes.</li><li>Managing data storage and security.</li><li>Applying data governance best practices.</li></ul>"
              ]}
            />
            <div className="button-group">
              <button onClick={handleCheckout('https://buy.stripe.com/cN29CF2Uw5dk30A6op')} className="button-common">Register Now</button>
              <button onClick={() => handleEnquiryClick('Enterprise_Architecture')} className="button-common">Enquiry</button>
            </div>
          </div>
        </div>

        <section className="join-community">
          <div className="community-card">
            <h2 className="community-title">Join the TechElevate Community</h2>
            <p className="community-content">
              TechElevate is a vibrant community dedicated to empowering individuals interested in getting digital skills. Our mission is to provide guidance, share knowledge, and foster a collaborative environment where members can enhance their technical skills and achieve their career goals.
            </p>
            <img src="/images/techcommunity.jpg" alt="Tech Community" className="community-image" />
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
      <Modal show={showForm} onClose={closeForm}>
        <EnquiryForm
          courseName={selectedCourse}
          onClose={closeForm}
        />
      </Modal>
      <Footer />
    </div>
  );
};

export default TechElevate;