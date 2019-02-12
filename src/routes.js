import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LayoutPublic } from 'containers';

import {
  Home,
  NoMatch,
  Olenka,
  Yevhen,
} from 'pages';

const routes = (
  <LayoutPublic>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/olenka" component={Olenka} />
      <Route exact path="/yevhen" component={Yevhen} />

      <Route component={NoMatch} />
    </Switch>
  </LayoutPublic>
);

export default routes;
