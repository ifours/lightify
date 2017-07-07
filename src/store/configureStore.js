import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'reducers';
import rootSaga from 'sagas';

import configureState from './configureState';
import configureMiddlewares, { sagaMiddleware } from './configureMiddlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    configureState(),
    composeEnhancers(
      applyMiddleware(
        ...configureMiddlewares()
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
