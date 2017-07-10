import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import App from './App';
import Callback from './Callback';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/callback" component={Callback}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
