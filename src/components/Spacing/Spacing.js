import React from 'react';
import PropTypes from 'prop-types';

const Spacing = ({
  height, width, hiddenAt, visibleAt,
}) => (
  <span className={`yo-spacing yo-spacing--height-${height} yo-spacing--width-${width} yo-spacing--hidden-${hiddenAt} yo-spacing--visible-${visibleAt}`} />
);

Spacing.defaultProps = {
  height: 0,
  width: 0,
};

Spacing.propTypes = {
  height: PropTypes.oneOf([0, 12, 24, 48, 64]),
  width: PropTypes.oneOf([0, 12, 24, 48]),
  hiddenAt: PropTypes.oneOf(['all', 'mobile', 'desktop']), // eslint-disable-line react/require-default-props
  visibleAt: PropTypes.oneOf(['all', 'mobile', 'desktop']), // eslint-disable-line react/require-default-props
};

export default Spacing;
