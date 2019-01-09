import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <ul className="ms-list">{children}</ul>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};

List.Item = ({ children }) => (
  <li className="ms-list__item">{children}</li>
);

List.Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
