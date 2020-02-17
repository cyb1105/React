import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux'
import promise from 'redux-promise';
import reducers from './reducers'
import { Provider } from 'react-redux';

const createStoreWithMiddle = applyMiddleware(promise)
(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddle(reducers)}>
    <App />
    </Provider>
, document.getElementById('root'));
