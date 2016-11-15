import React, { Component } from 'react';

class Hello extends Component {

    render() {
        return (
            <div>
                <h1>This is a hello router</h1>
                <h2>{ this.props.params.name }</h2>
                <h3>{ this.props.params.age } </h3>
            </div>
        );
    }
}

export default Hello;