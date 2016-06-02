import { createStore } from 'redux';
import { compose, ifElse, add, multiply, subtract, divide } from 'ramda';

const SUPPORTED_OPERATIONS = {
  '+': add,
  '*': multiply,
  '-': subtract,
  '/': divide,
};

// Actions Constants
const INCREMENT_VALUE = 'calculator/INCREMENT_VALUE';
const INCREMENT_CHANGE = 'calculator/INCREMENT_CHANGE';
const CHANGE_OPERATOR = 'calculator/CHANGE_OPERATOR';
const CALCULATE_EQUATION = 'calculator/CALCULATE_EQUATION';

// Actions Creators
export const incrementValue = change => ({
  type: INCREMENT_VALUE,
  payload: change,
});

export const changeOperator = operator => ({
  type: CHANGE_OPERATOR,
  payload: operator,
});

export const incrementChange = change => ({
  type: INCREMENT_CHANGE,
  payload: change,
});

export const calculateEquation = () => ({ type: CALCULATE_EQUATION });

// State Updaters
const isValidUpdate = ({ prev, update }) => {
  return update;
};

const changeField = ({ prev, update }) => {
  if (!prev) {
    return update;
  }
  return prev += update;
};

const updateField = ifElse(
  isValidUpdate,
  changeField,
  () => ''
);

const handleCalculate = ({ value, change, operator }) => {
  const valueFloat = parseFloat(value);
  const changeFloat = parseFloat(change);
  const nextValue = SUPPORTED_OPERATIONS[operator](valueFloat, changeFloat);
  return String(nextValue);
};

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        value: updateField({
          prev: state.value,
          update: payload,
        }),
      }
    case INCREMENT_CHANGE:
      return {
        ...state,
        change: updateField({
          prev: state.change,
          update: payload,
        }),
      }
    case CHANGE_OPERATOR:
    return {
      ...state,
      operator: payload,
    }
    case CALCULATE_EQUATION:
    return {
      value: handleCalculate(state),
      change: null,
      operator: null,
    }
    default:
      return state;
  }
};

export default createStore(reducer, {});
