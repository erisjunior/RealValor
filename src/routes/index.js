import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import * as Pages from '~/pages';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={Pages.Dashboard} />
      <Route path='/cadastro' component={() => <h1>ô loko</h1>} />

      <Redirect to='/' />
    </Switch>
  );
}
