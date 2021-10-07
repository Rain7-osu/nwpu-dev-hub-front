import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '@src/pages/User/Login';
import { SignIn } from '@src/pages/User/SignIn';
import { Info } from '@src/pages/User/Info';
import { ResetPassword } from '@src/pages/User/ResetPassword';

export const User = memo(() => {
  return (
    <Switch>
      <Route exact path="/user/login" component={Login} />
      <Route exact path="/user/register" component={SignIn} />
      <Route exact path="/user/reset-pwd" component={ResetPassword} />
      <Route path="/user/:userId/info" component={Info} />
    </Switch>
  );
});

User.displayName = 'Login';
