import { createElement } from 'react';
import PropTypes from 'prop-types';

import withTypography from '../Typography';

export const Paragraph = ({ children, className, dataAttr }) => (
  createElement('p', { className: `ms-paragraph${className && ` ${className}`}`, ...dataAttr }, children)
);

Paragraph.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  dataAttr: PropTypes.object,
  className: PropTypes.string,
};

export default withTypography(Paragraph);
