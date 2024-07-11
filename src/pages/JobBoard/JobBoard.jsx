import React, { useState, useRef, useEffect } from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobFilters from '../../components/JobFilters/JobFilters';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ type: '', location: '' });
  const [loading, setLoading] = useState(false);
  const applicationFormRef = useRef(null);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  console.log("API Base URL:", apiBaseUrl);

  const jobs = [
    { title: 'Product Manager', location: 'Remote', type: 'Contract' },
    { title: 'Software Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Backend Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Full Stack Developer', location: 'Remote', type: 'Contract' },
    { title: 'DevOps Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Cloud Solutions Architect', location: 'Remote', type: 'Contract' },
    { title: 'Data Scientist', location: 'Remote', type: 'Part-Time' },
    { title: 'Machine Learning Engineer', location: 'Remote', type: 'Contract' },
    { title: 'AI Research Scientist', location: 'Remote', type: 'Part-Time' },
    { title: 'UX/UI Designer', location: 'Remote', type: 'Contract' },
    { title: 'Product Marketing Manager', location: 'Remote', type: 'Full-Time' },
    { title: 'Scrum Master', location: 'Remote', type: 'Contract' },
    { title: 'Data Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Business Intelligence Analyst', location: 'Remote', type: 'Full-Time' },
    { title: 'Cybersecurity Specialist', location: 'Remote', type: 'Full-Time' },
    { title: 'Network Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Mobile App Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Blockchain Developer', location: 'Remote', type: 'Full-Time' },
    { title: 'Technical Writer', location: 'Remote', type: 'Part-Time' },
    { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Part-Time' },
    { title: 'Customer Success Manager', location: 'Remote', type: 'Full-Time' },
    { title: 'IT Support Specialist', location: 'Remote', type: 'Part-Time' },
    { title: 'Database Administrator', location: 'Remote', type: 'Part-Time' },
    { title: 'Sales Representative', location: 'Remote', type: 'Full-Time' },
  ];

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.type === '' || job.type === filters.type) &&
      (filters.location === '' || job.location === filters.location)
    );
  });

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
      github: applicant.github,
      jobTitle: selectedJob.title
    };

    try {
      const response = await fetch(`${apiBaseUrl}/submitApplication`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        setSubmissionStatus('Application submitted successfully!');
      } else {
        const errorData = await response.json();
        setSubmissionStatus(`Failed to submit application: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
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
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <JobFilters filters={filters} onFilterChange={handleFilterChange} />
        <div className="job-listings">
          {filteredJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3 className="stylish-font">{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.type}</p>
              <button onClick={() => handleApply(job)} className="apply-link">Apply Now</button>
            </div>
          ))}
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
                <input type="url" id="github" name="github" value={applicant.github} onChange={handleChange} required />
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
