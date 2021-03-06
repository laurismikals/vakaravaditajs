import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer'; // eslint-disable-line import/no-extraneous-dependencies

import Layout from './06-views/01-layout';
import configureStore from './configureStore';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

const render = (App) => {
  const root = document.getElementById('root');

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    root,
  );
};

render(Layout);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./06-views/01-layout', () => {
    // eslint-disable-next-line
    const Layout = require('./06-views/01-layout').default;

    render(Layout);
  });
}
