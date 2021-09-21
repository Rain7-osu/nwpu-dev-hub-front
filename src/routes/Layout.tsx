import React, { memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page } from '../styles';
import { Introduction } from '../pages/Introduction';
import { JoinUs } from '../pages/JoinUs';
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
          <Route exact path="/" component={Home}/>
          <Route path="/join" render={() => <JoinUs/>} />
          <Route exact path="/info" component={Introduction}/>
        </Switch>
      </Page>
      <Footer />
    </BrowserRouter>
  );
});

Layout.displayName = 'Layout';
