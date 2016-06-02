import { connect } from 'react-redux';
import {
  incrementValue,
  changeOperator,
  incrementChange,
} from './store';

const calculatorDispatch = (dispatch, props) => {
  return {
    incrementDisplay: (value) => dispatch(incrementValue(value)),
    changeOperator: operator => dispatch(changeOperator(operator)),
  };
};

const calculatorSelector = ({ value, change, operator }) => {
  return ({
    display: value,
    operator,
  });
};

const calculatorContainer = Component => {

  return connect(
    calculatorSelector,
    calculatorDispatch
  )(Component);
};

export default calculatorContainer;
