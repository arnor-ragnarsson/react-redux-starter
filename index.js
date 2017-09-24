import React from 'react';
import { render } from 'react-dom';
import { provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/containers/App';

const store = createStore();

import './scss/styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
