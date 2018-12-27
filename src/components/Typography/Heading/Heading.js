import { createElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import withTypography from '../Typography';

const Heading = ({
  children, className, dataAttr, size,
}) => (
  createElement(`h${size}`, { className: cn(className, 'ms-heading'), ...dataAttr }, children)
);

Heading.defaultProps = {
  className: '',
  size: 1,
};

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  dataAttr: PropTypes.object,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default withTypography(Heading);
