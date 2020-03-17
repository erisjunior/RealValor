import produce from 'immer';
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  getAccountRequest: ['userId'],
  getAccountSuccess: ['data'],
  getAccountFailure: null,
});

export const AccountTypes = Types;
export const AccountActions = Creators;

const INITIAL_STATE = {
  data: {},

  getAccountLoading: false,
};

function onGetAccountRequest(state) {
  return produce(state, draft => {
    draft.getAccountLoading = true;
  });
}

function onGetAccountSuccess(state, { data }) {
  return produce(state, draft => {
    draft.data = data;
    draft.getAccountLoading = false;
  });
}

function onGetAccountFailure(state) {
  return produce(state, draft => {
    draft.getAccountLoading = false;
  });
}

export default createReducer(INITIAL_STATE, {
  [Types.GET_ACCOUNT_REQUEST]: onGetAccountRequest,
  [Types.GET_ACCOUNT_SUCCESS]: onGetAccountSuccess,
  [Types.GET_ACCOUNT_FAILURE]: onGetAccountFailure,
});
