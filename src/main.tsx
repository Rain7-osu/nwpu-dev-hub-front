// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

import dva from 'dva';
import { Routes } from './routes';
import models from './models';
import './reset.css';
import './index.css';

const app = dva();

models.forEach((m) => {
  app.model(m as any);
});

app.router(Routes);

app.start('#root');
