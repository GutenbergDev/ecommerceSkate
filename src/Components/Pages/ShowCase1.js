import React from 'react';
import styles from './ShowCase1.module.css';
import banner1 from '../../images/banner/thunder-shape.jpg';

const ShowCase1 = () => {
  return (
    <section className={styles.container2}>
      <img src={banner1} alt='banner show case shape' />
    </section>
  )
}

export default ShowCase1;