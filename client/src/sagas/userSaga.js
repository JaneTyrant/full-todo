import { put } from 'redux-saga/effects';
import * as ActionUserCreators from '../actions/userCreators';
import * as API from '../api';

export function* createUserSaga(action) {
    try {
        const { data: { data: user } } = yield API.createUser(action.payload.values);
        yield put(ActionUserCreators.createUserSuccess(user));
    } catch (error) {
        yield put(ActionUserCreators.createUserError(error));
    }
};

export function* getAllUsersSaga(action) {
    try {
        const { data: { data: users } } = yield API.getAllUsers(action.payload);
        yield put(ActionUserCreators.getUsersSuccess(users))
    } catch (error) {
        yield put(ActionUserCreators.getUsersError(error));
    }
};