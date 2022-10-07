import {createStore} from 'redux'
import BatReducer from "./batReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(BatReducer, composeWithDevTools());

export default store 