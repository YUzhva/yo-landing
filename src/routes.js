import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Home,
  Olenka,
  Yevhen,
} from 'pages';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/olenka" component={Olenka} />
      <Route exact path="/yevhen" component={Yevhen} />
    </Switch>
  </Router>
);

export default routes;
