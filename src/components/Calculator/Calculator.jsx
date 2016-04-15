import React, { PropTypes } from 'react'
import styles from './calculator.css';

const Calculator = props => {
  return (
      <article className={styles.wrapper}>
        <input className={styles.input} />
        <section className={styles.key_pad}>
          <button className={styles.key}>7</button>
          <button className={styles.key}>8</button>
          <button className={styles.key}>9</button>
          <button className={styles.key}>÷</button>
          <button className={styles.key}>%</button>
          <button className={styles.key}>4</button>
          <button className={styles.key}>5</button>
          <button className={styles.key}>6</button>
          <button className={styles.key}>x</button>
          <button className={styles.key}>1/x</button>
          <button className={styles.key}>1</button>
          <button className={styles.key}>2</button>
          <button className={styles.key}>3</button>
          <button className={styles.key}>-</button>
          <div className={styles.equal_key_wrap}>
            <button className={styles.equal_key}>=</button>
          </div>
          <button className={styles.key}>0</button>
          <button className={styles.key}>.</button>
          <button className={styles.clear_key}>clear</button>
          <button className={styles.key}>+</button>
        </section>
      </article>
  );
};

export default Calculator;
