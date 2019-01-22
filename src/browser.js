import React from 'react';
// import { Provider } from 'react-redux';
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
  <BrowserRouter>
    {routes}
  </BrowserRouter>
);
// </Provider>

export default BrowserReactApp;
