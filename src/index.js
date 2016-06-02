import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { render } from 'react-dom';
import Calculator from './components/Calculator';
import calculatorContainer from './container.jsx';

const ConnectCalculator = calculatorContainer(Calculator);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <ConnectCalculator />
    </Provider>,
    document.getElementById('root')
  );
});
