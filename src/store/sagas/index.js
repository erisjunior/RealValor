import { all } from 'redux-saga/effects';

import RevenueSagas from './revenue';

export default function* rootSaga() {
  return yield all([...RevenueSagas]);
}
