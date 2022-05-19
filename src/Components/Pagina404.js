import React from 'react';
import styles from './Pagina404.module.css';
import error from '../images/Page404/erro_404.png';
import Head from './Head/Head';


function Pagina404() {
  return (
    <section className={`${styles.container} animeLeft`}>
      <Head title="Skate | Erro 404" description="Página não encontrada" />

      <img src={error} alt='Página não encontrada' />
      <span>Esta página é desconhecida ou não existe.</span>
    </section>
  )
}

export default Pagina404;