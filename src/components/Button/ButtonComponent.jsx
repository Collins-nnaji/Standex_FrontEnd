import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.css';

const ButtonComponent = ({ onClick, text, disabled }) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  disabled: false,
};

export default ButtonComponent;
