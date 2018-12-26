import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button type="button" className="yo-btn">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
