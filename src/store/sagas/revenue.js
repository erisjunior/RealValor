import { takeLatest, put, call, delay } from 'redux-saga/effects';

import * as helpers from '~/helpers';
import * as api from '~/services/api';
import { RevenueTypes, RevenueActions } from '~/store/ducks/revenue';

/** @Get */

function* getRevenue({ filter }) {
  try {
    yield delay(500);

    const time = Date.now();

    const bitcoinData = yield call(api.getBitcoin, time);

    const bitcoin = helpers.formatBitcoin(bitcoinData, filter);
    const directTreasure = helpers.formatDirectTreasure(filter);

    yield getRevenueSuccess({ bitcoin, directTreasure });
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
