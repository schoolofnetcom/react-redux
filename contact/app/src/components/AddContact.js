import React, { Component, PropTypes} from 'react';

class AddContact extends Component {

    render() {
        return (
            <div>
                <form>
                    <input type="text" ref="name"/>

                    <button type="button" onClick={ () => this.handleClick() }>Click to save</button>
                </form>
            </div>
        )
    }

    handleClick() {
        let name = this.refs.name.value || '';

        this.props.onAddContact(name);

        this.refs.name.value = '';
    }
}

export default AddContact;