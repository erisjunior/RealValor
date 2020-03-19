import { select } from 'redux-saga/effects';

export function* getRevenue() {
  return yield select(state => state.revenue);
}
