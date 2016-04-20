import React, { PropTypes } from 'react'
import styles from './calculator.css';
import Key from './../Key';

const Calculator = props => {
  return (
      <article className={styles.wrapper}>
        <input className={styles.input} />
        <section className={styles.key_pad}>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
          <Key>÷</Key>
          <Key>%</Key>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
          <Key>x</Key>
          <Key>1/x</Key>
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
          <Key>-</Key>
          <div className={styles.equal_key_wrap}>
            <Key type="equal_key">=</Key>
          </div>
          <Key>0</Key>
          <Key>.</Key>
          <Key type="clear_key">clear</Key>
          <Key>+</Key>
        </section>
      </article>
  );
};

export default Calculator;
