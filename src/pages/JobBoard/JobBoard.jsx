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

  const jobSearchUrls = {
    "LinkedIn": "https://www.linkedin.com/jobs/search/?keywords=",
    "Indeed": "https://www.indeed.com/jobs?q=",
    "Glassdoor": "https://www.glassdoor.com/Job/jobs.htm?sc.keyword=",
    "Monster": "https://www.monster.com/jobs/search/?q=",
    "SimplyHired": "https://www.simplyhired.com/search?q=",
    "UK Visa Jobs": "https://ukvisajobs.com/jobs?search=",
    "Gradcracker": "https://www.gradcracker.com/search?q=",
    "CV Library": "https://www.cv-library.co.uk/search-jobs?keywords="
  };

  const generateJobLinks = (jobTitle) => {
    return (
      <ul className="job-links">
        {Object.entries(jobSearchUrls).map(([site, url]) => (
          <li key={site} className={`job-link-${site.toLowerCase().replace(/\s+/g, '-')}`}>
            <a href={`${url}${encodeURIComponent(jobTitle)}`} target="_blank" rel="noopener noreferrer">
              <em>{site}</em>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="job-board">
      <Header />
      <main>
        <h1 className="stylish-font">Job Board</h1>
        <p className="sub-text">Find your dream job here! Explore opportunities in various tech fields and kickstart your career with the right role. Each section below links to relevant job listings on LinkedIn, Indeed, Glassdoor, Monster, SimplyHired, UK Visa Jobs, Gradcracker, and CV Library, providing you with a curated selection of potential jobs that match the skills and courses we offer. Take the next step towards your career growth and apply for the positions that best fit your aspirations.</p>
        <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
        <div className="job-sections">
          {Object.entries(jobTitles).map(([course, titles]) => (
            <div key={course} className="job-section">
              <h2>{course} Jobs</h2>
              <div className="job-card">
                <ul>
                  {titles.map((title, index) => (
                    <li key={index} className="job-item">
                      <div className="job-title">{title}</div>
                      {generateJobLinks(title)}
                    </li>
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