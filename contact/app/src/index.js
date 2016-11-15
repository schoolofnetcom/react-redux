import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import router from './utils/router';
import '../styles/styles.scss';

import Reducers from './reducers/Reducers';
import App from './components/App';

const rootElement = document.getElementById('app');
let store  = createStore(Reducers);

let fnRender = () => {
    render(
        <Provider store = { store }>
            <App />
        </Provider>,
        rootElement);
};

fnRender();