import React from 'react';
import PropTypes from 'prop-types';

const ButtonBurger = ({ isOpen, onClick }) => (
  <button
    type="button"
    className={`yo-btn-menu yo-btn-menu__burger yo-btn-menu__burger--${isOpen ? 'opened' : 'closed'}`}
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </button>
);

ButtonBurger.defaultProps = {
  isOpen: false,
};

ButtonBurger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ButtonBurger;
