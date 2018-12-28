import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isInProgress }) => (
  <div className={`yo-loader yo-loader--${isInProgress ? 'loading' : 'loaded'}`}>
    <div className="yo-loader__content">
      <div className="yo-loader__box" />
      <div className="yo-loader__box" />
    </div>
  </div>
);

Loader.defaultProps = {
  isInProgress: false,
};

Loader.propTypes = {
  isInProgress: PropTypes.bool,
};

export default Loader;
