import produce from 'immer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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

const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ACCOUNT_REQUEST]: onGetAccountRequest,
  [Types.GET_ACCOUNT_SUCCESS]: onGetAccountSuccess,
  [Types.GET_ACCOUNT_FAILURE]: onGetAccountFailure,
});

const persistConfig = {
  key: '@VondME_Seller/Account',
  storage,
  whitelist: ['data'],
};

export default persistReducer(persistConfig, reducer);
