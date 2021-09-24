import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '../styles';
import routes from './RouterConfig';

export const Layout = memo(() => {
  return (
    <Page>
      <Switch>
        {routes.map(({ title, ...props }) => <Route key={title} {...props} />)}
        <Redirect to="/" />
      </Switch>
    </Page>
  );
});

Layout.displayName = 'Layout';


