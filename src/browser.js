import React from 'react';
// import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import AOS from 'aos';

import { preloadImages } from 'utils';

import ImgYevhenAndOlenkaAsLego from 'pages/Home/images/Persons.svg';
import ImgYevhen from 'pages/Yevhen/Yevhen.svg';
import ImgOlenka from 'pages/Olenka/Olenka.svg';

// import reduxStore from './redux-store';
import routes from './routes';

AOS.init({ once: true, offset: 400 });

preloadImages([ImgYevhenAndOlenkaAsLego, ImgYevhen, ImgOlenka]);

// <Provider store={reduxStore}>
const BrowserReactApp = (
  <HelmetProvider>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </HelmetProvider>
);
// </Provider>

export default BrowserReactApp;
