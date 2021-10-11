import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const options = {
    position: 'bottom right',
    timeout: 5000,
    offset: '30px',
    transition: 'scale',
};

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById('root')
);
