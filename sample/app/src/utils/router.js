import { Router, Route, hashHistory } from 'react-router';
import React from 'react';
import App from './../components/App';
import Hello from './../components/Hello';
import About from './../components/About';

const router = (
    <Router history = { hashHistory }>
        <Route path="/" component={ App } />
        <Route path="/hello/:name/:age" component={ Hello } />
        <Route path="/about" component={ About } />
    </Router>
);

export default router;