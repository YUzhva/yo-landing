// import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
// import { Provider } from 'react-redux';

// import reduxStore from './redux-store';
import routes from './routes';

// const MAIN = (
//   <Provider store={reduxStore}>
//     {routes}
//   </Provider>
// );

AOS.init({ once: true });

const MAIN = routes;

ReactDOM.render(MAIN, document.getElementById('yo-landing'));
