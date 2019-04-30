import React, { Component } from 'react';
import styles from './TopOfProduct.module.css';
import Header from './Header/Header';
import Content from './Content/Content';

class TopOfProduct extends Component {
  render() {
    return (
      <div className={styles.topOfProduct} style={{ '--left-color': this.props.leftColor, '--right-color': this.props.rightColor }}>
        <Header />
        <Content
          onLeftColorChange={this.props.onLeftColorChange}
          onRightColorChange={this.props.onRightColorChange}
          leftColor={this.props.leftColor}
          rightColor={this.props.rightColor}
        />
      </div>
    );
  }
}

export default TopOfProduct;
