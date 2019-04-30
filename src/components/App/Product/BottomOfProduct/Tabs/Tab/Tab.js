import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.module.css';

class Tab extends Component {
  static propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    isActive: false,
  };

  render() {
    return (
      <div className={`${styles.tab} ${this.props.isActive ? styles.activeTab : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
