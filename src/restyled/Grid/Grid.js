import { createElement } from 'react';

import PlainCol from 'react-bootstrap/lib/Col';
import PlainGrid from 'react-bootstrap/lib/Grid';
import PlainRow from 'react-bootstrap/lib/Row';

const Grid = ({ className = '', ...restProps }) => (
  createElement(
    PlainGrid,
    { className: `yo-grid${className && ` ${className}`}`, ...restProps },
  )
);

Grid.Row = ({
  className = '',
  colEqualHeight = '',
  colMobileSpaced = '',
  colMobileEqual = '',
  ...restProps
}) => (
  createElement(
    PlainRow,
    {
      className:
        `yo-grid__row${className && ` ${className}`}${colEqualHeight && ' yo-grid__row--equal-height'}${colMobileEqual && ` yo-grid__row--mobile-equal yo-grid__row--mobile-equal-${colMobileEqual}`}${colMobileSpaced && ` yo-grid__row--mobile-spaced-${colMobileSpaced}`}`,
      ...restProps,
    },
  )
);

Grid.Col = ({
  className = '', contentAlign = '', noPadding = '', ...restProps
}) => (
  createElement(
    PlainCol,
    { className: `yo-grid__col${className && ` ${className}`}${contentAlign && ` yo-grid__col--content-align-${contentAlign}`}${noPadding && ' yo-grid__col--no-padding'}`, ...restProps },
  )
);

export default Grid;
