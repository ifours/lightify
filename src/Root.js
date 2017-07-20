import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll';

import App from 'pages/App';
import Callback from 'pages/Callback';
import Landing from 'pages/Landing';

import history from './history';
import store from './store';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <ScrollContext>
        <Switch>
          <Route exact path="/callback" component={Callback}/>
          <Route exact path="/landing" component={Landing}/>
          <Route path="/" component={App} />
        </Switch>
      </ScrollContext>
    </Router>
  </Provider>
);
