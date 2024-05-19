import React from 'react';
import './ProfileSetup.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const ProfileSetup = () => {
  return (
    <div className="profile-setup">
      <Header />
      <h1>Profile Setup</h1>
      <img src="/images/Profile Setup.svg" alt="Profile Setup" className="feature-image" />
      <p>Set up your profile to personalize your resume and make it stand out.</p>
      <Footer />
    </div>
  );
};

export default ProfileSetup;
