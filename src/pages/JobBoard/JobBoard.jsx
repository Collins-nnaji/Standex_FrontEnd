import React, { useState, useRef, useEffect } from 'react';
import './jobBoard.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    resume: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const applicationFormRef = useRef(null);

  const jobs = [
    { title: 'Business Data Analyst', location: 'Remote', type: 'Full-Time' },
    { title: 'Web Applications Developer', location: 'Remote', type: 'Contract' },
    { title: 'Software Engineer', location: 'Remote', type: 'Full-Time' },
    { title: 'Power Platform Developer', location: 'Remote', type: 'Contract' },
    { title: 'Project Manager', location: 'Remote', type: 'Full-Time' },
    { title: 'Data Scientist', location: 'Remote', type: 'Full-Time' },
    { title: 'Digital Marketing Specialist', location: 'Remote', type: 'Part-Time' },
    { title: 'Human Resources Executive', location: 'Remote', type: 'Full-Time' },
  ];

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
    const { name, value, files } = e.target;
    setApplicant({
      ...applicant,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', applicant.name);
    formData.append('email', applicant.email);
    formData.append('resume', applicant.resume);
    formData.append('jobTitle', selectedJob.title);

    try {
      const response = await fetch('https://job-backend-sable.vercel.app/api/apply', {
        method: 'POST',
        body: formData,
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
          {jobs.map((job, index) => (
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
                <label>Name</label>
                <input type="text" name="name" value={applicant.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={applicant.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Resume</label>
                <input type="file" name="resume" onChange={handleChange} required />
              </div>
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
            {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default JobBoard;
