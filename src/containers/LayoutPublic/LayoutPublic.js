import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'components';

import { Header } from './Header';
import { Footer } from './Footer';

class LayoutPublic extends Component {
  state = {
    isLandingLoadedPreviously: false,
  };

  componentDidMount() {
    this.isTimeoutFinished = false;
    const isLandingLoadedPreviously = !!(window && window.sessionStorage.getItem('isLandingLoadedPreviously'));

    if (!isLandingLoadedPreviously) {
      // NOTE: because of avoiding loader animation during page refresh
      // saving page loaded state in session storage
      window.addEventListener('load', () => {
        window.sessionStorage.setItem('isLandingLoadedPreviously', true);

        if (this.isTimeoutFinished) {
          this.setState({ isLandingLoadedPreviously: true });
        }
      }, { once: true });

      // NOTE: if application was loaded faster
      // let's has minimal animation time for Loader
      setTimeout(() => {
        this.isTimeoutFinished = true;
        const isSessionStorageWasUpdated = !!window.sessionStorage.getItem('isLandingLoadedPreviously');

        if (isSessionStorageWasUpdated) {
          this.setState({ isLandingLoadedPreviously: true });
        }
      }, 1500);
    } else {
      this.setState({ isLandingLoadedPreviously: true });
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.location !== prevProps.location)) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="layout-public">
        <Header />
        <main className="layout-public__main-content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

LayoutPublic.defaultProps = {
  location: {},
};

LayoutPublic.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}),
};

export default LayoutPublic;
