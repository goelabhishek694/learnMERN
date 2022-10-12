import { createStore } from 'redux';
import shopReducer from './shopReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(shopReducer,composeWithDevTools());

export default store;