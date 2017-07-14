import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll';

import history from './history';
import store from './store';
import App from './App';
import Callback from './Callback';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollContext>
            <Switch>
              <Route exact path="/callback" component={Callback}/>
              <Route path="/" component={App} />
            </Switch>
          </ScrollContext>
        </Router>
      </Provider>
    );
  }
}
