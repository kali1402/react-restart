import { combineReducers } from 'redux';
import age from './age';
import name from './name';

const rootReducer = combineReducers({
    age,
    name
});

export default rootReducer;