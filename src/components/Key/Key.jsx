import React, { PropTypes } from 'react';
import styles from './key.css';

const Key = ({ type, children }) =>
  <button className={styles[type]}>{children}</button>;

Key.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

Key.defaultProps = {
  type: 'key',
};

export default Key;
