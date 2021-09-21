import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { JoinUsMain } from './JoinUsMain';

export const JoinUs = () => {
  return (
    <Switch>
      <Route exact path="/join" component={JoinUsMain} />
    </Switch>
  );
};
