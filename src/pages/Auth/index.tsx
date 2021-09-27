import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContainer } from './style';
import { Login as LoginForm } from '@src/pages/Auth/Login';
import { SignIn as SignInForm } from '@src/pages/Auth/SignIn';
import { DevhubLogo } from '@src/components/DevhubLogo';

export const Auth = memo(() => {
  return (
    <AuthContainer>
      <div className="login-bg">
        <img alt="图片" src={findSrc('/assets/login_bg.png')} />
      </div>
      <div className="auth-form">
        <div className="auth-page-logo">
          <DevhubLogo white type="picture" size="normal" />
        </div>
        <Switch>
          <Route exact path="/auth/login" component={LoginForm} />
          <Route exact path="/auth/register" component={SignInForm} />
        </Switch>
      </div>
    </AuthContainer>
  );
});

Auth.displayName = 'Login';
