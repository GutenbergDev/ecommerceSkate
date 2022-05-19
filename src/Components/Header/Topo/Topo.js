import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Topo.module.css';
import whats from '../../../images/social/whatsapp.png';

function Topo() {

  return (
    <section className={styles.container}>
      <div className={styles.containerItem}>
        <div className={styles.item1}>
          <img src={whats} alt='logo Whats' />
          <Link to={`/whats`}>(21) 93399-4455</Link>
        </div>
        <div className={styles.item2}>
          <p><span>Frete Grátis</span> para compras acima de R$ 150,00</p>
        </div>
        <div className={styles.item3}>
          <Link to={`/fale-conosco`}>Fale Conosco</Link>
        </div>
      </div>
    </section>
  )
}

export default Topo;