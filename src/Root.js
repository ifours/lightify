import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll';

import store from './store';
import App from './App';
import Callback from './Callback';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollContext>
            <div>
              <Route path="/" component={App} />
              <Route exact path="/callback" component={Callback}/>
            </div>
          </ScrollContext>
        </BrowserRouter>
      </Provider>
    );
  }
}
