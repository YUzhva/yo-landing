import { createElement } from 'react';
import PropTypes from 'prop-types';

import withTypography from '../Typography';

export const Paragraph = ({ children, className }) => (
  createElement('p', { className: `ms-paragraph${className && ` ${className}`}` }, children)
);

Paragraph.defaultProps = {
  className: '',
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default withTypography(Paragraph);
