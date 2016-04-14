import React from 'react';
import { render } from 'react-dom';

import Calculator from './components/Calculator';

document.addEventListener('DOMContentLoaded', () => {
  render(<Calculator />, document.getElementById('root'));
});
