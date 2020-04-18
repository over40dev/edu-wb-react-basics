import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/app/Router';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './css/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('main')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
