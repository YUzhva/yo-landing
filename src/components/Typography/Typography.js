import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const withTypography = (WrappedComponent) => {
  const WrappedComponentWithTypography = ({
    center, className, color, justify, inline, typeface, ...props
  }) => {
    const dataAttr = {};
    const rest = {};

    Object.keys(props).forEach((propKeyName) => {
      if (propKeyName.includes('data-')) {
        dataAttr[propKeyName] = props[propKeyName];
      } else {
        rest[propKeyName] = props[propKeyName];
      }
    });

    return (
      <WrappedComponent
        className={cn(className, 'ms-typography', {
          'ms-typography--center': center,
          [`ms-typography--color-${color}`]: color,
          'ms-typography--justify': justify,
          'ms-typography--inline': inline,
          [`ms-typography--typeface-${typeface}`]: typeface,
        })}
        dataAttr={dataAttr}
        {...rest}
      />
    );
  };

  WrappedComponentWithTypography.defaultProps = {
    center: false,
    className: '',
    color: 'black',
    justify: false,
    inline: false,
    typeface: 'book',
  };

  WrappedComponentWithTypography.propTypes = {
    center: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf(['black', 'yellow']),
    justify: PropTypes.bool,
    inline: PropTypes.bool,
    typeface: PropTypes.oneOf(['bold', 'book', 'medium']),
  };

  return WrappedComponentWithTypography;
};

export default withTypography;
