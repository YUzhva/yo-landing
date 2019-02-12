import { createElement } from 'react';
import PropTypes from 'prop-types';

import withTypography from '../Typography';

const TextSection = ({ children, className, dataAttr }) => (
  createElement('span', { className: `ms-text-section${className && ` ${className}`}`, ...dataAttr }, children)
);

TextSection.defaultProps = {
  className: '',
};

TextSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  dataAttr: PropTypes.object,
};

export default withTypography(TextSection);
