import { createStore } from 'redux';
import { compose, ifElse } from 'ramda';

// Actions Constants
const INCREMENT_VALUE = 'calculator/INCREMENT_VALUE';
const INCREMENT_CHANGE = 'calculator/INCREMENT_CHANGE';
const CHANGE_OPERATOR = 'calculator/CHANGE_OPERATOR';

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
    default:
      return state;
  }
};

export default createStore(reducer, {});
