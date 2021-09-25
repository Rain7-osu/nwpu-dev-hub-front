import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { Page } from '../styles';
import routes from './RouterConfig';

export const Layout = memo(() => {
  return (
    <Page>
      {routes.map(({ title, ...props }) => <Route key={title} {...props} />)}
    </Page>
  );
});

Layout.displayName = 'Layout';


