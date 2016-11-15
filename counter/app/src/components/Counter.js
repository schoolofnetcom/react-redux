import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onInc: PropTypes.func.isRequired
    }

    render() {
        const { value, onInc } = this.props;

        return(
            <div>
                <h2>Clicked: {value} times</h2>
                <button type="button" onClick={onInc}>Click here</button>
            </div>
        )
    }
}

export default Counter;

