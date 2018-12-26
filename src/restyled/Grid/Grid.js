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

Grid.Row = ({ className = '', colEqualHeight = '', ...restProps }) => (
  createElement(
    PlainRow,
    { className: `yo-grid__row${className && ` ${className}`}${colEqualHeight && ' yo-grid__row--equal-height'}`, ...restProps },
  )
);

Grid.Col = ({ className = '', contentAlign = '', ...restProps }) => (
  createElement(
    PlainCol,
    { className: `yo-grid__col${className && ` ${className}`}${contentAlign && ` yo-grid__col--content-align-${contentAlign}`}`, ...restProps },
  )
);

export default Grid;
