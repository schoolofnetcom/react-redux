import React from 'react';
import { render } from 'react-dom';
// import router from './utils/router';
import '../styles/styles.scss';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';

import { createStore } from 'redux';

const rootElement = document.getElementById('app');

let store = createStore(counterReducer);

let fnRender = () => {
    render(
        <Counter
            value={ store.getState() }
            onInc={ () => store.dispatch( { type: 'INC' }) }
        ></Counter>,
        rootElement
    );
};

fnRender();

store.subscribe(fnRender);