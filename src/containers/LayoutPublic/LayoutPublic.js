import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet-async';

import { Loader } from 'components';

import circularStdBold from 'media/fonts/CircularStd-Bold.woff';
import circularStdBook from 'media/fonts/CircularStd-Book.woff';
import circularStdMedium from 'media/fonts/CircularStd-Medium.woff';

import { Header } from './Header';
import { Footer } from './Footer';

class LayoutPublic extends Component {
  state = {
    isLandingLoadedPreviously: false,
  };

  componentDidMount() {
    this.handleInitialLoader();
    this.removeQueryRefParam();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.location.pathname !== prevProps.location.pathname)) {
      window.scrollTo(0, 0);
    }
  }

  handleInitialLoader = () => {
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

  removeQueryRefParam = () => {
    const { location } = this.props;

    const params = new URLSearchParams(location.search);
    params.delete('ref');
    const cleanURLSearchParams = params.toString();

    this.props.history.push({
      path: location.pathname,
      search: cleanURLSearchParams ? `?${cleanURLSearchParams}` : null,
    });
  }

  render() {
    return (
      <div className="layout-public">
        <Helmet>
          <link
            rel="preload"
            href={circularStdBold}
            as="font"
            type="font/woff"
            crossOrigin
          />
          <link
            rel="preload"
            href={circularStdBook}
            as="font"
            type="font/woff"
            crossOrigin
          />
          <link
            rel="preload"
            href={circularStdMedium}
            as="font"
            type="font/woff"
            crossOrigin
          />
        </Helmet>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
};

export default withRouter(LayoutPublic);
