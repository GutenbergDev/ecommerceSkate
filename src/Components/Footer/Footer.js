import React from 'react';
import Atendimento from './Atendimento';
import styles from './Footer.module.css';
import Informacao from './Informacao';
import Institucional from './Institucional';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <section className={`${styles.container2}`}>
      <div className={`${styles.container3} container`}>
        <Institucional />
        <Informacao />
        <Atendimento />
        <SocialMedia />
      </div>
    </section>
  )
}

export default Footer;