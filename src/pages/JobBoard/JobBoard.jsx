import React from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const JobBoard = () => {
  const jobTitles = {
    "Business Intelligence": [
      "Power BI Developer",
      "SQL Data Analyst",
      "Business Intelligence Analyst",
      "Data Warehouse Manager"
    ],
    "Data Science": [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Research Scientist",
      "Data Analyst"
    ],
    "Power Platform": [
      "Power Apps Developer",
      "Power Automate Specialist",
      "Power BI Consultant",
      "Microsoft Flow Expert"
    ],
    "Enterprise Architecture": [
      "Solution Architect",
      "Data Architect",
      "Enterprise Architect",
      "Cloud Solutions Architect"
    ]
  };

  const linkedInSearchUrls = {
    "Business Intelligence": "https://www.linkedin.com/jobs/search/?keywords=Business%20Intelligence",
    "Data Science": "https://www.linkedin.com/jobs/search/?keywords=Data%20Science",
    "Power Platform": "https://www.linkedin.com/jobs/search/?keywords=Power%20Platform",
    "Enterprise Architecture": "https://www.linkedin.com/jobs/search/?keywords=Enterprise%20Architecture",
  };

  return (
    <div className="job-board">
      <Header />
      <main>
        <h1 className="header-black">Job Board</h1>
        <p>Find your dream job here! Explore opportunities in various tech fields and kickstart your career with the right role. Each section below links to relevant job listings on LinkedIn, providing you with a curated selection of potential jobs that match the skills and courses we offer. Take the next step towards your career growth and apply for the positions that best fit your aspirations.</p>
        <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
        <div className="job-sections">
          {Object.entries(jobTitles).map(([course, titles]) => (
            <div key={course} className="job-section">
              <h2>
                <a href={linkedInSearchUrls[course]} target="_blank" rel="noopener noreferrer">
                  {course} Jobs
                </a>
              </h2>
              <div className="job-card">
                <ul>
                  {titles.map((title, index) => (
                    <li key={index} className="job-item">{title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobBoard;
