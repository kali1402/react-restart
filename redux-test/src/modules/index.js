import { combineReducers } from 'redux';
import counter, { counterSaga } from './counter';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        counterSaga(),
    ]);
}

const rootReducer = combineReducers({
    counter
});

export default rootReducer;