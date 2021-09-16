import React, { memo } from 'react';
import { Navigator } from './Navigator/Navigator';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Page } from '../styles';
import { Footer } from './Footer';
import { RouterListener } from './RouterListener';

export const Layout = memo(() => {
  return (
    <BrowserRouter>
      <RouterListener />
      <Navigator/>
      <Page>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Redirect to="/" />
      </Page>
      <Footer />
    </BrowserRouter>
  );
});

Layout.displayName = 'Layout';
