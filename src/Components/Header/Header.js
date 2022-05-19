import React from 'react';
import styles from './Header.module.css';
import Menu from './Menu/Menu';
import Topo from './Topo/Topo';


function Header() {
  return (
    <section>
      <Topo />
      <Menu />
    </section>
  )
}

export default Header;