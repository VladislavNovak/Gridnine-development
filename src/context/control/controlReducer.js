import {
  UPDATE_SORT,
  UPDATE_TRANSFER,
  UPDATE_PRICE_RANGE,
  UPDATE_CARRIER} from "./controlActions";

import {
  FILTER_BY_CARRIER,
  FILTER_BY_PRICE,
  FILTER_BY_TRANSFER,
  SORT} from "./controlTypes";

const handlers = {
  [UPDATE_SORT]: (state, {payload}) => ({
    ...state, [SORT]: payload
  }),
  [UPDATE_TRANSFER]: (state, {payload}) => ({
    ...state, [FILTER_BY_TRANSFER]: payload
  }),
  [UPDATE_PRICE_RANGE]: (state, {payload}) => ({
    ...state, [FILTER_BY_PRICE]: payload
  }),
  [UPDATE_CARRIER]: (state, {payload}) => ({
    ...state, [FILTER_BY_CARRIER]: payload
  }),
  DEFAULT: state => state,
};

export const controlReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
