import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './../constants/ActionsType';

function contact(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT:
            let obj = [
                ...state,
                {
                    name: action.name,
                    id  : action.id
                }
            ]

            console.log(obj);

            return obj;
            // return {
            //     name: action.name,
            //     id  : action.id
            // }
        case DELETE_CONTACT:
            return [
                state.slice(0, action.index)
            ]

        case EDIT_CONTACT:
            return [
                state.slice(0, action.index),
                Object.assign({}, { name: 'Leonan' })
            ]
        default:
            return state
    }
}

export default contact;