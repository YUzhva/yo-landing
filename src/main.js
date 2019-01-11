// import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
// import { Provider } from 'react-redux';

import { preloadImages } from 'utils';

import ImgYevhenAndOlenkaAsLego from 'pages/Home/images/Persons.svg';
import ImgYevhen from 'pages/Yevhen/Yevhen.svg';
import ImgOlenka from 'pages/Olenka/Olenka.svg';

// import reduxStore from './redux-store';
import routes from './routes';

// const MAIN = (
//   <Provider store={reduxStore}>
//     {routes}
//   </Provider>
// );

AOS.init({ once: true, offset: 400 });

const MAIN = routes;

preloadImages([ImgYevhenAndOlenkaAsLego, ImgYevhen, ImgOlenka]);

ReactDOM.render(MAIN, document.getElementById('yo-landing'));
