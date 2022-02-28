import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewApp from './NewApp';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <NewApp />
  </Provider>,
  document.getElementById('root')
);