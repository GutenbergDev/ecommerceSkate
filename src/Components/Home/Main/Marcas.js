import React from 'react';
import styles from './Marcas.module.css';
import primitive from '../../../images/logo-marca/primitive.png';
import element from '../../../images/logo-marca/element-removebg-preview.png';


const Marcas = () => {
  return (
    <section className={`container animeLeft`}>
      <div className={styles.novos}>
        <span>Marcas</span>
      </div>
      <div className={`${styles.container2} animeLeft`}>
        <img src={primitive} alt='primitive' />
        <img src={element} alt='element' />
      </div>
    </section>
  )
}

export default Marcas;