import React, { Component } from 'react';
import styles from './Content.module.css';
import blueAndGreen from './blueAndGreen.png';
import ColorPicker from './ColorPicker/ColorPicker';

const COLORS = ['#51BEEE', '#1FCB31', '#EA5532', '#E01099', '#EAF02F', '#5E5E5E'];

class Content extends Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.title}>Nintendo Switch</div>
        <div className={styles.productWrapper}>
          <div className={styles.leftWrapper}>
            <ColorPicker colors={COLORS} activeColor={this.props.leftColor} onChange={this.props.onLeftColorChange} />
          </div>
          <div className={styles.imageWrapper}>
            <img src={blueAndGreen} alt="Nintendo Switch" />
          </div>
          <div className={styles.rightWrapper}>
            <ColorPicker colors={COLORS} activeColor={this.props.rightColor} onChange={this.props.onRightColorChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
