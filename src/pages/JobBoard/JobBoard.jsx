import React, { useEffect, useState } from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="job-board">
      <Header />
      <main>
        <h1 className="stylish-font">Job Board</h1>
        <p className="sub-text">Find your dream job here! Explore opportunities in various tech fields and kickstart your career with the right role.</p>
        <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
        <div className="intro-text">
          <h2>Latest Job Listings</h2>
          <p>Explore the latest job opportunities available in the tech industry.</p>
        </div>
        {loading && <p>Loading job listings...</p>}
        {error && <p>Error loading job listings: {error.message}</p>}
        <div className="job-listings">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-link">Apply Now</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobBoard;
