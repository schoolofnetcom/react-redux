import React, { Component, PropTypes} from 'react';
import ContactItem from './ContactItem';

class ListContact extends Component {

    render() {
        console.log(this.props.contacts)
        return(
            <div>
                {
                    this.props.contacts.map((contact, index) => {
                        return <ContactItem contact = { contact }
                                            key = { index }
                                            onDeleteItem = { this.props.deleteItemAct }
                                            onEditItem = { this.props.editItemAct } >
                               </ContactItem>
                    })
                }
            </div>
        )
    }
}

export default ListContact;