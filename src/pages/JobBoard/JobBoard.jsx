import React, { useState } from 'react';
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

  const [activeAccordions, setActiveAccordions] = useState({});

  const toggleAccordion = (site) => {
    setActiveAccordions((prev) => ({
      ...prev,
      [site]: !prev[site]
    }));
  };

  const generateJobTitles = (jobTitles, url) => {
    return Object.entries(jobTitles).map(([course, titles]) => (
      <div key={course} className="job-section">
        <h3 className="accordion-header" onClick={() => toggleAccordion(`${url}-${course}`)}>
          {course} Jobs
        </h3>
        {activeAccordions[`${url}-${course}`] && (
          <ul className="job-titles">
            {titles.map((title, index) => (
              <li key={index} className="job-item">
                <a href={`${url}${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <div className="job-board">
      <Header />
      <main>
        <h1 className="stylish-font">Job Board</h1>
        <p className="sub-text">Find your dream job here! Explore opportunities in various tech fields and kickstart your career with the right role.</p>
        <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
        <div className="intro-text">
          <h2>Find Jobs on Trusted Platforms</h2>
          <p>Below are links to job opportunities available on various trusted platforms. Click on a platform to see available jobs in your desired field.</p>
        </div>
        <div className="job-sections">
          {Object.entries(jobSearchUrls).map(([site, url]) => (
            <div key={site} className="job-search-site">
              <h2>{site}</h2>
              {generateJobTitles(jobTitles, url)}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobBoard;
