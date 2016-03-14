import readyMountCalculator from './mount.jsx';

const mountCalculator = readyMountCalculator(
  document.getElementById('root')
);

document.addEventListener('DOMContentLoaded', mountCalculator);
