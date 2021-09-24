import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterListener } from './RouterListener';
import { Navigator } from './Navigator';
import { Footer } from './Footer';
import { Layout } from './Layout';

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterListener />
      <Navigator/>
      <Layout />
      <Footer />
    </BrowserRouter>
  );
};
