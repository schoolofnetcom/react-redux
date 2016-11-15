import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT  } from './../constants/ActionsType';

let id = 0;

export function addContact(name) {
    return {
        type: ADD_CONTACT,
        name,
        id: id++
    }
}

export function deleteContact(index) {
    return {
        type: DELETE_CONTACT,
        index
    }
}

export function editContact(index, contact) {
    return {
        type: EDIT_CONTACT,
        index,
        contact
    }
}