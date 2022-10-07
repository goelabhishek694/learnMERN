import {createStore} from 'redux'
// import BatReducer from "./batReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
const store = createStore(rootReducer, composeWithDevTools());

export default store 