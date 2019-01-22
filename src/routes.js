import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LayoutPublic } from 'containers';

import {
  Home,
  Olenka,
  Yevhen,
} from 'pages';

const routes = (
  <Switch>
    <LayoutPublic>
      <Route exact path="/" component={Home} />

      <Route exact path="/olenka" component={Olenka} />
      <Route exact path="/yevhen" component={Yevhen} />
    </LayoutPublic>
  </Switch>
);

export default routes;
