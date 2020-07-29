import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'

const PLUS = 'counter/plus';
const MINUS = 'counter/minus';
const SET_DIFF = 'counter/set_diff';

const PLUS_ASYNC = 'counter/plus_async';
const MINUS_ASYNC = 'counter/minus_async';

export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });
export const set_diff = (diff) => ({ type: SET_DIFF, diff });

export const plus_async = () => ({ type: PLUS_ASYNC })
export const minus_async = () => ({ type: MINUS_ASYNC })

function* plusSaga() {
    yield delay(1500);
    yield put(plus());
}

function* minusSaga() {
    yield delay(1500);
    yield put(minus());
}

export function* counterSaga() {
    yield takeEvery(PLUS_ASYNC, plusSaga);
    yield takeLatest(MINUS_ASYNC, minusSaga);
}

const initialState = {
    number: 0,
    diff: 1
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                number: state.number + state.diff
            }
        case MINUS:
            return {
                ...state,
                number: state.number - state.diff
            }
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        default:
            return state;
    }
}