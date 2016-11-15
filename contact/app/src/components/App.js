import React, { Component, PropTypes} from 'react';
import AddContact from './AddContact';
import { connect } from 'react-redux';
import { addContact, deleteContact, editContact  } from './../actions/ActionsCreator';
import ListContact from './ListContact';

class App extends Component {

    render() {
        const  { dispatch, contacts } = this.props;
        return (
            <main>
                <AddContact
                    onAddContact = {
                        text => dispatch(addContact(text))
                    }
                ></AddContact>

                <ListContact contacts = { contacts }
                             deleteItemAct = { index =>
                                dispatch(deleteContact(index))
                            }
                            editItemAct = { (index, contact) =>
                                dispatch(editContact(index, contact))
                            }
                />
            </main>
        )
    }
}

function list(state) {
    return {
        contacts : state
    }
}

App = connect(list)(App);
export default App;