import { takeLatest, put, call } from 'redux-saga/effects';

import * as api from '~/services/api';
import { AccountTypes, AccountActions } from '~/store/ducks/account';

/** @Get */

function* getAccount({ userId }) {
  try {
    const { data } = yield call(api.account.getAccount, userId);

    yield getAccountSuccess(data);
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
