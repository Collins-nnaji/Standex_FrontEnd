// FeatureButton.js
import React from 'react';
import PropTypes from 'prop-types';

const FeatureButton = ({ icon, text, onClick }) => (
  <button className="feature-button" onClick={onClick}>
    <img src={icon} alt={text} className="feature-icon" />
    <span>{text}</span>
  </button>
);

FeatureButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeatureButton;