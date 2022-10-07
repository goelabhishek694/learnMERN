import { combineReducers } from 'redux';
import BatReducer from "./batReducer";
import BallReducer from "./ballReducer";

const rootReducer = combineReducers({
    bat: BatReducer,
    ball:BallReducer
})

export default rootReducer;