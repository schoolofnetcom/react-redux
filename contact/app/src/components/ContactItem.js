import React, { Component, PropTypes} from 'react';

class ContactItem extends Component {

    render() {
        console.log(this.props.contact);
        return(
            <div>
                <h4> { this.props.contact.name } </h4>

                <button type="button" onClick={ (e) => this.deleteItem(e) }> - </button>
                <button type="button" onClick={ (e) => this.editItem(e) }>Edit</button>

            </div>
        )
    }

    deleteItem(event) {
        event.preventDefault();

        this.props.onDeleteItem(this.props.id)
    }

    editItem(event) {
        event.preventDefault();

        this.props.onEditItem(this.props.id, this.props.contact);
    }
}

export default ContactItem;