import {
  UPDATE_SORT,
  UPDATE_TRANSFER,
  UPDATE_PRICE_RANGE,
  UPDATE_CARRIER} from "./controlActions";

import {
  CHOOSE_BY_CARRIER,
  CHOOSE_BY_PRICE,
  CHOOSE_BY_TRANSFER,
  SORT_BY_PRICE} from "./controlTypes";

const handlers = {
  [UPDATE_SORT]: (state, {payload}) => ({
    ...state, [SORT_BY_PRICE]: payload
  }),
  [UPDATE_TRANSFER]: (state, {payload}) => ({
    ...state, [CHOOSE_BY_TRANSFER]: payload
  }),
  [UPDATE_PRICE_RANGE]: (state, {payload}) => ({
    ...state, [CHOOSE_BY_PRICE]: payload
  }),
  [UPDATE_CARRIER]: (state, {payload}) => ({
    ...state, [CHOOSE_BY_CARRIER]: payload
  }),
  DEFAULT: state => state,
};

export const controlReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
