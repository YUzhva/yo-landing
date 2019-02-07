import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const withTypography = (WrappedComponent) => {
  const WrappedComponentWithTypography = ({
    center, className, color, justify, inline, weight, ...props
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
          [`ms-typography--weight-${weight}`]: weight,
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
    weight: 'regular',
  };

  WrappedComponentWithTypography.propTypes = {
    center: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf(['black', 'yellow']),
    justify: PropTypes.bool,
    inline: PropTypes.bool,
    weight: PropTypes.oneOf(['regular', 'medium', 'bold']),
  };

  return WrappedComponentWithTypography;
};

export default withTypography;
