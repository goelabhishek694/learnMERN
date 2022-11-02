import * as contactActions from '../actions/actionTypes'
import initialState from '../redux/initialState.json'

const contactReducer = (state = initialState.contact, action) => {
    switch (action.type) {
        case contactActions.SET_CONTACT:
            return {...action.payload}
        case contactActions.UPDATE_CONTACT:
            return { ...action.payload};
        default: return state
    }
}

export default contactReducer