import { all } from 'redux-saga/effects';

import AccountSagas from './account';

export default function* rootSaga() {
  return yield all([...AccountSagas]);
}
