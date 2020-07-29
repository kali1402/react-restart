import { takeEvery } from "redux-saga/effects";
import * as userAPI from "../api/user";
import { handleAction, actionSaga } from "../lib/utils";

const GET_USERS = "user/GET_USERS";
const GET_USERS_SUCCESS = "user/GET_USERS_SUCCESS";
const GET_USERS_ERROR = "user/GET_USERS_ERROR";
const GET_USER_DETAIL = "user/GET_USER_DETAIL";
const GET_USER_DETAIL_SUCCESS = "user/GET_USER_DETAIL_SUCCESS";
const GET_USER_DETAIL_ERROR = "user/GET_USER_DETAIL_ERROR";

export const getUsers = () => ({ type: GET_USERS });
export const getUserDetail = (id) => ({ type: GET_USER_DETAIL, data: id });

export function* usersSaga() {
    yield takeEvery(GET_USERS, actionSaga(userAPI.getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR));
    yield takeEvery(GET_USER_DETAIL, actionSaga(userAPI.getUserDetail, GET_USER_DETAIL_SUCCESS, GET_USER_DETAIL_ERROR));
}
// 초기상태 선언
const initialState = {
    users: {
        loading: false,
        data: null,
        error: null,
    },
    user: {},
};
// 리듀서 생성
const user = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
        case GET_USERS_SUCCESS:
        case GET_USERS_ERROR:
            return handleAction(GET_USERS, "users")(state, action);
        case GET_USER_DETAIL:
        case GET_USER_DETAIL_SUCCESS:
        case GET_USER_DETAIL_ERROR:
            return handleAction(GET_USER_DETAIL, "user")(state, action);
        case "ADD_USER":
            userAPI.getAdd(action.name, action.nick, action.desc);
            return state;
        case "ADD_USER_SUCCESS":
            return handleAction(GET_USERS, "users")(state, action);
        case "DEL_USER":
            userAPI.getDel(action.id);
            return handleAction(GET_USERS, "users")(state, action);
        case "UP_USER":
            userAPI.getUp(action.id, action.name, action.english_name, action.desc);
            return handleAction(GET_USERS, "users")(state, action);
        default:
            return state;
    }
};

export default user;