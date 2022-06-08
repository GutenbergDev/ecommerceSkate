import React from 'react';
import styles from './ShowCase2.module.css';
import banner2 from '../../images/banner/thunder-banner.jpg';

const ShowCase2 = () => {
  return (
    <section className={styles.container2}>
      <img src={banner2} alt='Imagem banner show case' />
    </section>
  )
}

export default ShowCase2;