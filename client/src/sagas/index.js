import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createUserSaga, getAllUsersSaga } from './userSaga';
function* rootSaga() {
    yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga)
    yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getAllUsersSaga)
}

export default rootSaga;