import {
  UPDATE_SORT,
  UPDATE_TRANSFER,
  UPDATE_PRICE_RANGE,
  CREATE_DATA_FLIGHTS} from "./controlActions";

import {
  FILTER_BY_CARRIER,
  FILTER_BY_PRICE,
  FILTER_BY_TRANSFER,
  ADAPTED_FLIGHTS,
  SORT} from "./controlTypes";

const handlers = {
  [CREATE_DATA_FLIGHTS]: (state, {payload: {flights, uniqueCarriers}}) => ({
    ...state, [ADAPTED_FLIGHTS]: flights, [FILTER_BY_CARRIER]: uniqueCarriers
  }),
  [UPDATE_SORT]: (state, {payload}) => ({
    ...state, [SORT]: payload
  }),
  [UPDATE_TRANSFER]: (state, {payload}) => ({
    ...state, [FILTER_BY_TRANSFER]: payload
  }),
  [UPDATE_PRICE_RANGE]: (state, {payload}) => ({
    ...state, [FILTER_BY_PRICE]: payload
  }),
  DEFAULT: state => state,
};

export const controlReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
