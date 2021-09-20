import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Page } from '../styles';
import { Introduction } from '../pages/Introduction';
import { Footer } from './Footer';
import { Navigator } from './Navigator/Navigator';
import { RouterListener } from './RouterListener';

export const Layout = memo(() => {
  return (
    <BrowserRouter>
      <RouterListener />
      <Navigator/>
      <Page>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/info" component={Introduction}/>
          <Redirect to="/" />
        </Switch>
      </Page>
      <Footer />
    </BrowserRouter>
  );
});

Layout.displayName = 'Layout';
