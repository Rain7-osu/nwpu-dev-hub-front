import React, { memo } from 'react';
import { LoginContainer } from '@src/pages/Auth/styles';
import { Route, Switch } from 'react-router-dom';
import { Login as LoginForm } from '@src/pages/Auth/Login';
import { Register as RegisterForm } from '@src/pages/Auth/Register';

export const Auth = memo(() => {
  return (
    <LoginContainer>
      <Switch>
        <Route exact path="/auth/login" component={LoginForm} />
        <Route exact path="/auth/register" component={RegisterForm} />
      </Switch>
    </LoginContainer>
  );
});

Auth.displayName = 'Login';
