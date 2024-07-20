import React, { useState, useRef, useEffect, useMemo } from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import axios from 'axios';

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const applicationFormRef = useRef(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  const staticJobs = useMemo(() => [
    { title: 'Product Manager', location: 'Remote', type: 'Contract' },
    { title: 'Software Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Backend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Full Stack Developer', location: 'Remote', type: 'Contract' },
    { title: 'DevOps Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Cloud Solutions Architect', location: 'Remote', type: 'Contract' },
    { title: 'Data Scientist', location: 'Remote', type: 'Part-Time' },
    { title: 'Machine Learning Engineer', location: 'Remote', type: 'Contract' },
    { title: 'UX/UI Designer', location: 'Remote', type: 'Contract' },
    { title: 'Product Marketing Manager', location: 'Remote', type: 'Full-Time' },
    { title: 'Data Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Business Intelligence Analyst', location: 'Remote', type: 'Full-Time' },
    { title: 'Mobile App Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Part-Time' },
    { title: 'Customer Success Manager', location: 'Remote', type: 'Full-Time' },
  ], []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/jobs`);
        const uniqueJobs = [...new Map([...staticJobs, ...response.data].map(job => [job.title + job.location + job.type, job])).values()];
        setJobs(uniqueJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs(staticJobs);  // Use static jobs if there's an error
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [apiUrl, staticJobs]);

  const handleApply = (job) => {
    setSelectedJob(job);
    setSubmissionStatus('');
  };

  useEffect(() => {
    if (selectedJob && applicationFormRef.current) {
      applicationFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({
      ...applicant,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const applicationData = {
      name: applicant.name,
      email: applicant.email,
      linkedin: applicant.linkedin,
      jobTitle: selectedJob.title,
      timestamp: new Date()
    };

    // Add GitHub only if it's not empty
    if (applicant.github) {
      applicationData.github = applicant.github;
    }

    try {
      await axios.post(`${apiUrl}/applications`, applicationData);
      setSubmissionStatus('Application submitted successfully!');
      setApplicant({
        name: '',
        email: '',
        linkedin: '',
        github: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-board">
      <Header />
      <main>
        <h1 className="stylish-font">Join Our Team</h1>
        <p className="sub-text">Explore exciting career opportunities at our company and apply to join our innovative team.</p>
        <img src="/images/Careers Page.svg" alt="Careers" className="job-board-image" />
        <div className="intro-text">
          <h2 className="stylish-font">Current Job Openings</h2>
          <p className="sub-text">Find the perfect role that suits your skills and interests.</p>
        </div>
        <div className="job-listings">
          {jobs.length > 0 ? jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="stylish-font">{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <button onClick={() => handleApply(job)} className="apply-link">Apply Now</button>
            </div>
          )) : (
            <p>No jobs available</p>
          )}
        </div>
        {selectedJob && (
          <div className="application-form" ref={applicationFormRef}>
            <h2 className="stylish-font">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={applicant.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={applicant.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn Profile URL</label>
                <input type="url" id="linkedin" name="linkedin" value={applicant.linkedin} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="github">GitHub Profile URL</label>
                <input type="url" id="github" name="github" value={applicant.github} />
              </div>
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
            {loading && <LoadingSpinner />}
            {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default JobBoard;
