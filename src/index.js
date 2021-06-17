import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import Login from './routes/LoginPage/Login';
import { AnimatedRoute } from 'react-router-transition';

/*
ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <Routes />
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <React.StrictMode>
      <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
