import React, { memo } from 'react';
import { Navigator } from './Navigator/Navigator';
import { BrowserRouter, Route } from 'react-router-dom';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Page } from '../styles';
import { Footer } from './Footer';

export const Layout = memo(() => {
  return (
    <BrowserRouter>
      <Navigator/>
      <Page>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
      </Page>
      <Footer />
    </BrowserRouter>
  );
});

Layout.displayName = 'Layout';
