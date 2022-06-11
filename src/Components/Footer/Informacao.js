import React from 'react';
import styles from './Informacao.module.css';

const Informacao = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>Informações</h3>
        <p>Fale Conosco</p>
        <p>Política de Troca e Devolução</p>
        <p>Prazo de Entrega</p>
      </div>
    </section>
  )
}

export default Informacao;