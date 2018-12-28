import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'components';

import { Header } from './Header';
import { Footer } from './Footer';

class LayoutPublic extends Component {
  state = {
    isLandingLoadedPreviously: !!window.sessionStorage.getItem('isLandingLoadedPreviously'),
  };

  componentDidMount() {
    this.isTimeoutFinished = false;
    const { isLandingLoadedPreviously } = this.state;

    if (!isLandingLoadedPreviously) {
      // NOTE: because of avoiding loader animation during page refresh
      // saving page loaded state in session storage
      window.addEventListener('load', () => {
        window.sessionStorage.setItem('isLandingLoadedPreviously', true);

        if (this.isTimeoutFinished) {
          this.setState({ isLandingLoadedPreviously: true });
        }
      });

      // NOTE: if application was loaded faster
      // let's has minimal animation time for Loader
      setTimeout(() => {
        this.isTimeoutFinished = true;
        const isSessionStorageWasUpdated = !!window.sessionStorage.getItem('isLandingLoadedPreviously');

        if (isSessionStorageWasUpdated) {
          this.setState({ isLandingLoadedPreviously: true });
        }
      }, 1500);
    }
  }

  render() {
    return (
      <div className="layout-public">
        <Loader isInProgress={!this.state.isLandingLoadedPreviously} />
        {
          this.state.isLandingLoadedPreviously && (
            <Fragment>
              <Header />
              {this.props.children}
              <Footer />
            </Fragment>
          )
        }
      </div>
    );
  }
}

LayoutPublic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPublic;
