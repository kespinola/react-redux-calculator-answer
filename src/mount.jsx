import React from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator';

const readyMountCalculator = node => () => {
  // Render Calculator to #root node
  render(<Calculator />, node);
};

export default readyMountCalculator;
