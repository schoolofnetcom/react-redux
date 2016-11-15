import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/hello/leonan/20">Hello Component</Link></li>
                    <li><Link to="/about">About Component</Link></li>
                </ul>
            </div>
        )
    }
}

export default App;