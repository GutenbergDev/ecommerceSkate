import React from 'react';
import styles from './Atendimento.module.css';

const Atendimento = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>Atendimento</h3>
        <p>
          Horário de funcionamento:
          10h as 19h - Seg a Sex
          9h as 15h - Sab. 
        </p>
        <p>
          Domingo e feriados - Fechado
          Sk8 Skate Shop
          CNPJ: 10.200.300/0001-40
          Centro - Rio de Janeiro
        </p>
        <p>
          Loja Fisica e Online
          xx Anos no Mercado
        </p>
      </div>
    </section>
  )
}

export default Atendimento;