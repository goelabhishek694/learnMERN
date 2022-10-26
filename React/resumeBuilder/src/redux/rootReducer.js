import { combineReducers } from 'redux'
import documentReducer from './documentReducer'
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'

const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education:educationReducer
})

export default rootReducer