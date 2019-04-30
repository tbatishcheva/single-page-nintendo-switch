import React, { Component } from 'react';
import styles from './UserMenu.module.css';
import cart from './cart.svg';

class UserMenu extends Component {
  render() {
    return (
      <div className={styles.userMenu}>
        <a href="#" className={styles.account}>My Account</a>
        <a href="#"><img className={styles.image} src={cart} alt="Cart" /></a>
      </div>
    );
  }
}

export default UserMenu;
