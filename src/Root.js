import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll';

import App from 'pages/App';

import history from './history';
import store from './store';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <ScrollContext>
        <App />
      </ScrollContext>
    </Router>
  </Provider>
);
