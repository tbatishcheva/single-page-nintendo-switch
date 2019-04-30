import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Color.module.css';

class Color extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
  };

  static defaultProps ={
    isActive: false,
  };

  handleOnChange = () => {
    this.props.onChange(this.props.color);
  };

  render() {
    return (
      <div onClick={this.handleOnChange} className={styles.wrapper} style={{ borderColor: this.props.isActive ? this.props.color : null }}>
        <div className={`${styles.color} ${this.props.isActive ? styles.activeColor : ''}`} style={{ background: this.props.color }} />
      </div>
    );
  }
}

export default Color;
