import { select } from 'redux-saga/effects';

export function* getAccount() {
  return yield select(state => state.account);
}
