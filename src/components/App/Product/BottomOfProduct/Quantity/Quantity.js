import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Quantity.module.css';

class Quantity extends Component {
  static propTypes = {
    quantity: PropTypes.number,
  };

  static defaultProps = {
    quantity: 0,
  };

  render() {
    return (
      <div className={styles.quantity}>
        <button type="button" className={styles.minus}>-</button>
        <input type="number" className={styles.number} value={this.props.quantity} />
        <button type="button" className={styles.plus}>+</button>
      </div>
    );
  }
}

export default Quantity;
