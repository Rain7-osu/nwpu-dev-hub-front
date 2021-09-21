import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '../styles';
import routes from './RouterConfig';
import { Footer } from './Footer';
import { Navigator } from './Navigator';
import { RouterListener } from './RouterListener';

export const Layout = memo(() => {
  return (
    <BrowserRouter>
      <RouterListener />
      <Navigator/>
      <Page>
        <Switch>
          {routes.map(({ title, ...props }) => <Route key={title} {...props} />)}
          <Redirect to="/" />
        </Switch>
      </Page>
      <Footer />
    </BrowserRouter>
  );
});

Layout.displayName = 'Layout';
