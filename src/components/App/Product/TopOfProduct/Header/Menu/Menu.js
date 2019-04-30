import React, { Component } from 'react';
import styles from './Menu.module.css';

class Menu extends Component {
  render() {
    return (
      <ul className={styles.menu}>
        <li><a href="#">Category</a></li>
        <li><a href="#">Search</a></li>
      </ul>
    );
  }
}

export default Menu;
