import React from 'react';
import App from './containers/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import appReducer from './reducers/app';
import './index.css';

const store = createStore(appReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);