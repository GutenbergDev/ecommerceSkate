import React from 'react';
import { NavLink } from 'react-router-dom';
import Head from '../../Head/Head';
import styles from './Shapes.module.css';

const Shapes = () => {
  return (
    <section className={styles.container}>
      <Head title="Skate | Shapes" description="Todos os Shapes" />

      <nav>
        <ul>
          <li>
            <NavLink className={styles.link} to="/">Home</NavLink> <span>&#62;</span> <NavLink className={styles.link} to="/shapes">Shapes</NavLink>
          </li>
        </ul>
      </nav>
      

    </section>
  )
}

export default Shapes;