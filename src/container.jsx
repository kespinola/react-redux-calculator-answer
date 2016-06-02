import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
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

const calculatorContainer = Component => {
  const CalculatorContainer = (props) => {
    const {
      operator,
      incrementChange,
      incrementValue,
    } = props;

    return (
      <Component
        {...props}
        incrementDisplay={operator ? incrementChange : incrementValue}
      />
    );
  };

  CalculatorContainer.propTypes = {
    operator: PropTypes.string,
    incrementValue: PropTypes.func,
    incrementDisplay: PropTypes.func,
  };

  return connect(
    calculatorSelector,
    calculatorDispatch
  )(CalculatorContainer);
};

export default calculatorContainer;
