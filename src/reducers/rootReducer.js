import { combineReducers } from "redux";
import { wishes } from './wishes';
import { slides } from './slides';

const rooReducer = combineReducers({
    wishes,
    slides,
})

export default rooReducer;