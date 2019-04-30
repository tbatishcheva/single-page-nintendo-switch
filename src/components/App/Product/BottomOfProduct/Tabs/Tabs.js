import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.css';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defuaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={styles.tabs}>
        {this.props.children}
      </div>
    );
  }
}

export default Tabs;
