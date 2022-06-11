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
      <div className={styles.copy}>
        <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Desenvolvido por Gutemberg Medeiros</p>
      </div>
    </section>
  )
}

export default Footer;