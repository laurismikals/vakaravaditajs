import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap';
import options from './options';
import * as reducers from './05-reducers';

export default (history, preLoadedState) => {
  const {
    reducer, middleware, enhancer, thunk,
  } = connectRoutes(
    history,
    routesMap,
    options,
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, reduxThunk);
  const enhancers = compose(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./05-reducers/index', () => {
      const reducers = require('./05-reducers/index'); // eslint-disable-line global-require, no-shadow
      const rootReducer = combineReducers({ ...reducers, location: reducer }); // eslint-disable-line no-shadow, max-len
      store.replaceReducer(rootReducer);
    });
  }

  return { store, thunk };
};
