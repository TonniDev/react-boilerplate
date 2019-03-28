import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';

import configureStore from './configureStore';
import App from './App';

const store = configureStore({});

if (typeof document !== 'undefined') {
  const application = document.getElementById('application');
  render(
    <Provider store={store}>
      <BrowserRouter basename="/">
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </Provider>,
    application
  );
}
