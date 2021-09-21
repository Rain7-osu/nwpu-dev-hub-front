import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { JoinUsMain } from './JoinUsMain';

export const JoinUs = memo(() => {
  return (
    <Switch>
      <Route exact path="/join" component={JoinUsMain} />
    </Switch>
  );
});

JoinUs.displayName = 'JoinUs';
