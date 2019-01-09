import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
  <button type="button" className={`yo-btn${className && ` ${className}`}`}>
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
