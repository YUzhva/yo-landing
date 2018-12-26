import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LayoutPublic } from 'containers';

import {
  Home,
  Olenka,
  Yevhen,
} from 'pages';

const routes = (
  <Router>
    <Switch>
      <LayoutPublic>
        <Route exact path="/" component={Home} />

        <Route exact path="/olenka" component={Olenka} />
        <Route exact path="/yevhen" component={Yevhen} />
      </LayoutPublic>
    </Switch>
  </Router>
);

export default routes;
