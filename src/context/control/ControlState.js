import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {ControlContext} from "./controlContext";
import {controlReducer} from './controlReducer';

import {START_MAX_PRICE, START_MIN_PRICE} from '../../utils/constants';
import {
  UPDATE_SORT,
  UPDATE_TRANSFER,
  UPDATE_PRICE_RANGE,
  UPDATE_CARRIER,} from './controlActions';

import {
  SORT_BY_PRICE,
  CHOOSE_BY_TRANSFER,
  ASCENDING,
  DESCENDING,
  SPEND_TIME,
  ONE_BOARDING,
  DIRECT,
  CHOOSE_BY_PRICE,
  MIN_PRICE,
  MAX_PRICE,
  CHOOSE_BY_CARRIER,} from './controlTypes';

const initialState = {
  [SORT_BY_PRICE]: {
    [ASCENDING]: {
      name: SORT_BY_PRICE,
      value: ASCENDING,
      title: `по возрастанию цены`,
      checked: true,
    },
    [DESCENDING]: {
      name: SORT_BY_PRICE,
      value: DESCENDING,
      title: `по убыванию цены`,
      checked: false,
    },
    [SPEND_TIME]: {
      name: SORT_BY_PRICE,
      value: SPEND_TIME,
      title: `по времени в пути`,
      checked: false,
    },
  },
  [CHOOSE_BY_TRANSFER]: {
    [ONE_BOARDING]: {
      name: ONE_BOARDING,
      title: `1 пересадка`,
      checked: false,
    },
    [DIRECT]: {
      name: DIRECT,
      title: `без пересадок`,
      checked: false,
    },
  },
  [CHOOSE_BY_PRICE]: {
    [MIN_PRICE]: {
      name: MIN_PRICE,
      title: `От`,
      value: START_MIN_PRICE,
    },
    [MAX_PRICE]: {
      name: MAX_PRICE,
      title: `До`,
      value: START_MAX_PRICE,
    },
  },
  [CHOOSE_BY_CARRIER]: [],
};

export const ControlState = ({children}) => {
  const [state, dispatch] = useReducer(controlReducer, initialState);

  const updateSort = (payload) => {
    dispatch({type: UPDATE_SORT, payload});
  };

  const updateTransfer = (payload) => {
    dispatch({type: UPDATE_TRANSFER, payload});
  };

  const updatePriceRange = (payload) => {
    dispatch({type: UPDATE_PRICE_RANGE, payload});
  };

  const updateCarrier = (payload) => {
    dispatch({type: UPDATE_CARRIER, payload});
  };

  const createCarrier = (payload) => {
    dispatch({type: UPDATE_CARRIER, payload});
  };

  const getSortState = () => state[SORT_BY_PRICE];
  const getTransferState = () => state[CHOOSE_BY_TRANSFER];
  const getPriceRangeState = () => state[CHOOSE_BY_PRICE];
  const getCarrierState = () => state[CHOOSE_BY_CARRIER];

  return (
    <ControlContext.Provider
      value={{
        updateSort,
        updateTransfer,
        updatePriceRange,
        updateCarrier,
        getSortState,
        getTransferState,
        getPriceRangeState,
        getCarrierState,
        createCarrier,
        controlState: state
        }} >
        {children}
    </ControlContext.Provider>
  );
};

ControlState.propTypes = {
  children: PropTypes.node.isRequired
};
