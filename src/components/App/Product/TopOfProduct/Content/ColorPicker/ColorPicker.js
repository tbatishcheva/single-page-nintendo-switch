import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.module.css';
import Color from './Color/Color';

class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    activeColor: PropTypes.string,
  };

  static defaultProps = {
    activeColor: null,
  };

  render() {
    return (
      <div className={styles.colorPicker}>
        {this.props.colors.map(color => (
          <div className={styles.color}>
            <Color onChange={this.props.onChange} color={color} isActive={color === this.props.activeColor} />
          </div>
        ))}
      </div>
    );
  }
}

export default ColorPicker;
