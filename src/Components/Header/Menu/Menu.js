import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo-marca/Sk8.png';
import CarrinhoCompra from './CarrinhoCompra';
import CriarConta from './CriarConta';
import styles from './Menu.module.css';

function Menu() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link className={styles.link} to="/"><img src={logo} alt='logo' /></Link>
        </div>
        <section className={styles.menu}>
          <nav>
            <ul>
              <li>            
                <NavLink className={styles.link} to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/shapes">Shape</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/trucks">Truck</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/rodas">Roda</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/rolamentos">Rolamento</NavLink>
              </li>
              <li>
                <NavLink className={styles.link} to="/lixas">Lixa</NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.menuAccount}>
          <CriarConta />
          <CarrinhoCompra />
        </section>
      </div>
    </section>
  )
}

export default Menu;