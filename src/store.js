import { createStore } from 'redux';
import { compose, ifElse } from 'ramda';

// Actions Constants
const INCREMENT_VALUE = 'calculator/INCREMENT_VALUE';
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
      const change = {
        prev: state.value,
        update: payload,
      };
      return {
        ...state,
        value: updateField(change),
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
