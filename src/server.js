import React from 'react';
// import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';

// import reduxStore from './redux-store';
import routes from './routes';

// <Provider store={reduxStore}>
const ProvideServerReactApp = (requestUrl, context, helmetContext) => (
  <HelmetProvider context={helmetContext}>
    <StaticRouter location={requestUrl} context={context}>
      {routes}
    </StaticRouter>
  </HelmetProvider>
);
// </Provider>

export default ProvideServerReactApp;
