import { BrowserRouter } from 'react-router-dom';
import { RouterListener } from './RouterListener';
import { Navigator } from './Navigator';
import { Footer } from './Footer';
import React from 'react';

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterListener />
    <Navigator/>

    <Footer />
    </BrowserRouter>
  )
}