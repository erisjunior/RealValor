import produce from 'immer';
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getRevenueRequest: ['filter'],
  getRevenueSuccess: ['data'],
  getRevenueFailure: null,
});

export const RevenueTypes = Types;
export const RevenueActions = Creators;

const INITIAL_STATE = {
  data: {
    bitcoin: {
      chartData: [],
    },
    directTreasure: {
      chartData: [],
    },
  },

  revenueLoading: false,
};

function onGetRevenueRequest(state) {
  return produce(state, draft => {
    draft.revenueLoading = true;
  });
}

function onGetRevenueSuccess(state, { data }) {
  return produce(state, draft => {
    draft.data = data;
    draft.revenueLoading = false;
  });
}

function onGetRevenueFailure(state) {
  return produce(state, draft => {
    draft.revenueLoading = false;
  });
}

export default createReducer(INITIAL_STATE, {
  [Types.GET_REVENUE_REQUEST]: onGetRevenueRequest,
  [Types.GET_REVENUE_SUCCESS]: onGetRevenueSuccess,
  [Types.GET_REVENUE_FAILURE]: onGetRevenueFailure,
});
