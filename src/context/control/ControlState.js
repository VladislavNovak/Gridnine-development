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
  SORT,
  FILTER_BY_TRANSFER,
  ASCENDING,
  DESCENDING,
  TOTAL_TRAVEL_DURATION,
  ONE_BOARDING,
  DIRECT,
  FILTER_BY_PRICE,
  MIN_PRICE,
  MAX_PRICE,
  FILTER_BY_CARRIER,} from './controlTypes';

const initialState = {
  [SORT]: {
    [ASCENDING]: {
      name: SORT,
      value: ASCENDING,
      title: `по возрастанию цены`,
      checked: true,
      fn: (a, b) => (a.price - b.price),
    },
    [DESCENDING]: {
      name: SORT,
      value: DESCENDING,
      title: `по убыванию цены`,
      checked: false,
      fn: (a, b) => (b.price - a.price),
    },
    [TOTAL_TRAVEL_DURATION]: {
      name: SORT,
      value: TOTAL_TRAVEL_DURATION,
      title: `по времени в пути`,
      checked: false,
      fn: (a, b) => (a.totalTravelDuration - b.totalTravelDuration),
    },
  },
  [FILTER_BY_TRANSFER]: {
    [ONE_BOARDING]: {
      name: ONE_BOARDING,
      title: `1 пересадка`,
      checked: false,
      transfer: 1,
    },
    [DIRECT]: {
      name: DIRECT,
      title: `без пересадок`,
      checked: false,
      transfer: 0,
    },
  },
  [FILTER_BY_PRICE]: {
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
  [FILTER_BY_CARRIER]: [],
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

  const getSortState = () => state[SORT];
  const getTransferState = () => state[FILTER_BY_TRANSFER];
  const getPriceRangeState = () => state[FILTER_BY_PRICE];
  const getCarrierState = () => state[FILTER_BY_CARRIER];

  const getRules = () => {
    const sortRule = Object.values(getSortState()).find(item => item.checked).fn;

    const transfers = Object.values(getTransferState()).filter(item => item.checked).length
      ? Object.values(getTransferState()).filter(item => item.checked).reduce((total, item) => (total.push(item.transfer), total), [])
      : [0, 1, 2, 3, 4, 5];

    const transferRule = (arr) => (
      arr.filter(item => transfers.includes(item.totalCountOfTransfer))
    );

    const priceRangeRule = (arr) => (
      arr.filter(item => (item.price > getPriceRangeState()[MIN_PRICE].value) && (item.price < getPriceRangeState()[MAX_PRICE].value))
    );

    const carriers = Object.values(getCarrierState()).filter(item => item.checked).length
    ? Object.values(getCarrierState()).filter(item => item.checked).reduce((total, item) => (total.push(item.name), total), [])
    : Object.values(getCarrierState()).reduce((total, item) => (total.push(item.name), total), []);

    const carrierRule = (arr) => (
      arr.filter(item => carriers.includes(item.carrier))
    );

    return ({sortRule, transferRule, priceRangeRule, carrierRule});
  };

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
        getRules,
        controlState: state
        }} >
        {children}
    </ControlContext.Provider>
  );
};

ControlState.propTypes = {
  children: PropTypes.node.isRequired
};
