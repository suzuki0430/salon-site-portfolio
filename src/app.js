import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
