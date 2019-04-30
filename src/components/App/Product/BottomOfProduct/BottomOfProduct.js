import React, { Component } from 'react';
import styles from './BottomOfProduct.module.css';
import game from './ZeldaGame.png';
import nintendo from './nintendo.svg';
import arrowDown from './arrowDown.svg';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab/Tab';
import Quantity from './Quantity/Quantity';
import Select from './Select/Select';

class BottomOfProduct extends Component {
  render() {
    return (
      <div className={styles.bottomOfProduct}>
        <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <div className={styles.leftTitle}>
            The Legend of Zelda: Breath of the Wild Special Edition Bundle
          </div>
          <div><img src={nintendo} alt="Nintendo" /></div>
          <div className={styles.subtitle}>
            Forget everything you know about The Legend of Zelda games.
            Travel across vast fields, through forests, and to mountain peaks as you discover what has
            become of the kingdom of Hyrule In this stunning Open-Air Adventure.
          </div>
          <div className={styles.price}>$499.99</div>
        </div>
          <button className={styles.leftButton}>Add to Wish List</button>
        </div>
        <div className={styles.middle}>
          <div className={styles.gameWrapper}>
            <img src={game} alt="Game" className={styles.game} />
          </div>
          <img src={arrowDown} alt="arrowDown" className={styles.arrowDown} />
        </div>
        <div className={styles.right}>
          <Tabs>
            <Tab isActive><a className={styles.link} href="#">Check Out</a></Tab>
            <Tab><a className={styles.link} href="#">Item Details</a></Tab>
            <Tab><a className={styles.link} href="#">Reviews</a></Tab>
          </Tabs>
          <div className={styles.deliveryWrapper}>
            <div className={styles.rightTitle}>
              <span className={styles.bold}>Delivery: </span>
                7~14 days
            </div>
            <div className={styles.subtitle}>Ships from London to Japan. Additional tax might be included.</div>
            <div className={styles.rightTitle}>
              <span className={styles.bold}>Gift: </span>
                yes
            </div>
            <div className={styles.selectWrapper}>
              <Select />
            </div>
            <div className={`${styles.rightTitle} ${styles.quantityWrapper}`}>
              <span className={styles.bold}>Quantity:</span>
              <Quantity quantity={1} />
            </div>
          </div>
          <button className={styles.rightButton}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default BottomOfProduct;
