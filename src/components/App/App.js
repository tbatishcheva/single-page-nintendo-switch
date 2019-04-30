import React, { Component } from 'react';
import styles from './App.module.css';
import Product from './Product/Product';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Product />
      </div>
    );
  }
}

export default App;
