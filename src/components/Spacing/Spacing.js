import React from 'react';
import PropTypes from 'prop-types';

const Spacing = ({ height, width }) => (
  <span className={`yo-spacing yo-spacing--height-${height} yo-spacing--width-${width}`} />
);

Spacing.defaultProps = {
  height: 0,
  width: 0,
};

Spacing.propTypes = {
  height: PropTypes.oneOf([0, 12, 24, 48, 64]),
  width: PropTypes.oneOf([0, 12, 24, 48]),
};

export default Spacing;
