import { takeLatest, put, call } from 'redux-saga/effects';

import * as helpers from '~/helpers';
import * as api from '~/services/api';
import { RevenueTypes, RevenueActions } from '~/store/ducks/revenue';

/** @Get */

function* getRevenue({ filter }) {
  try {
    const bitcoin = yield call(api.getBitcoin, filter);
    const directTreasure = helpers.calcDirectTreasure(filter);

    const formatedData = helpers.formatData(bitcoin, directTreasure);

    yield getRevenueSuccess(formatedData);
  } catch (err) {
    yield getRevenueFailure();
  }
}

function* getRevenueSuccess(data) {
  yield put(RevenueActions.getRevenueSuccess(data));
}

function* getRevenueFailure() {
  yield put(RevenueActions.getRevenueFailure());
}

export default [takeLatest(RevenueTypes.GET_REVENUE_REQUEST, getRevenue)];
