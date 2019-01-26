import React from 'react';
import PropTypes from 'prop-types';

const ButtonMenu = ({ isOpen, onClick }) => (
  <button
    type="button"
    className={`yo-btn-menu yo-btn-menu__burger yo-btn-menu__burger--${isOpen ? 'opened' : 'closed'}`}
    onClick={onClick}
    aria-label="Menu button"
  >
    <span />
    <span />
    <span />
  </button>
);

ButtonMenu.defaultProps = {
  isOpen: false,
};

ButtonMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ButtonMenu;
