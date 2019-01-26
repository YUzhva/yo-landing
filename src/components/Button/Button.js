import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  ariaLabel, children, className, onClick,
}) => (
  <button
    type="button"
    className={`yo-btn${className && ` ${className}`}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func, // eslint-disable-line react/require-default-props
};

export default Button;
