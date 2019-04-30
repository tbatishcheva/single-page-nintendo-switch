import React, { Component } from 'react';
import styles from './Select.module.css';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '0' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange} className={styles.customSelect}>
        <option value="0">I purchase this item as a gift</option>
        <option value="1">I purchase this item as a gift</option>
        <option value="2">I purchase this item as a gift</option>
      </select>
    );
  }
}

export default Select;
