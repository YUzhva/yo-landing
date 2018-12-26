import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';

const LayoutPublic = ({ children }) => (
  <div className="layout-public">
    <Header />
    {children}
    <Footer />
  </div>
);

LayoutPublic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPublic;
