import React, { Component } from 'react';
import styles from './Product.module.css';
import TopOfProduct from './TopOfProduct/TopOfProduct';
import BottomOfProduct from './BottomOfProduct/BottomOfProduct';

class Product extends Component {
  state = {
    leftColor: '#51BEEE',
    rightColor: '#EAF02F',
  };

  handleLeftColorChange = (color) => {
    this.setState({ leftColor: color });
  };

  handleRightColorChange = (color) => {
    this.setState({ rightColor: color });
  };

  render() {
    return (
      <div className={styles.product}>
        <TopOfProduct onLeftColorChange={this.handleLeftColorChange} onRightColorChange={this.handleRightColorChange} leftColor={this.state.leftColor} rightColor={this.state.rightColor} />
        <BottomOfProduct />
      </div>
    );
  }
}

export default Product;
