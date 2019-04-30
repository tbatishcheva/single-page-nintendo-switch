import React, { Component } from 'react';
import styles from './Header.module.css';
import Menu from './Menu/Menu';
import UserMenu from './UserMenu/UserMenu';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Menu />
        <UserMenu />
      </div>
    );
  }
}

export default Header;
