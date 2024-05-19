import React from 'react';
import './ResumeEditor.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ResumeEditor = () => {
  return (
    <div className="resume-editor">
      <Header />
      <h1>Resume Editor</h1>
      <img src="/images/Resume Editor.svg" alt="Resume Editor" className="feature-image" />
      <p>Edit and customize your resume with our easy-to-use editor.</p>
      <Footer />
    </div>
  );
};

export default ResumeEditor;
