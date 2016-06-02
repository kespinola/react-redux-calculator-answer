import { connect } from 'react-redux';
import {
  calculateEquation,
  changeOperator,
  incrementChange,
  incrementValue,
} from './store';

const calculatorDispatch = (dispatch, props) => {
  return {
    incrementValue: (value) => dispatch(incrementValue(value)),
    incrementChange: (change) => dispatch(incrementChange(change)),
    changeOperator: operator => dispatch(changeOperator(operator)),
    calculateResult: () => dispatch(calculateEquation()),
  };
};

const calculatorSelector = ({ value, change, operator }) => ({
  display: operator ? change : value,
  operator,
});

const calculatorMergeProps = (
  stateProps,
  { incrementValue, incrementChange, ...dispatch },
  ownProps
) => ({
  ...stateProps,
  ...dispatch,
  ...ownProps,
  incrementDisplay: stateProps.operator ? incrementChange : incrementValue,
});

const calculatorContainer = Component => connect(
  calculatorSelector,
  calculatorDispatch,
  calculatorMergeProps
)(Component);

export default calculatorContainer;
