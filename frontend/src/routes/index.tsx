import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Areas from 'pages/Areas';

export default function Routes() {
  return (
    <Switch>
      <Route key={1} path="/" exact component={Home} />
      <Route key={2} path="/areas" exact component={Areas} />
    </Switch>
  );
}
