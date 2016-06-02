import { createStore } from 'redux';
import { compose, ifElse } from 'ramda';

// Actions Constants
const INCREMENT_VALUE = 'calculator/INCREMENT_VALUE';

// Actions Creators
export const incrementValue = change => ({
  type: INCREMENT_VALUE,
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
      const change = {
        prev: state.value,
        update: payload,
      };
      return {
        ...state,
        value: updateField(change),
      }
    default:
      return state;
  }
};

export default createStore(reducer, {});
