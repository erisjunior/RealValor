import { takeLatest, put } from 'redux-saga/effects';

// import * as api from '~/services/api';
import { AccountTypes, AccountActions } from '~/store/ducks/account';

/** @Get */

function* getAccount({ userId }) {
  try {
    yield getAccountSuccess(userId);
  } catch (err) {
    yield getAccountFailure();
  }
}

function* getAccountSuccess(data) {
  yield put(AccountActions.getAccountSuccess(data));
}

function* getAccountFailure() {
  yield put(AccountActions.getAccountFailure());
}

export default [takeLatest(AccountTypes.GET_ACCOUNT_REQUEST, getAccount)];
