import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { CssBaseline } from '@material-ui/core';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
