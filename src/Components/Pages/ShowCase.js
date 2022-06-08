import React from 'react';
import styles from './ShowCase.module.css';
import ShowCase1 from './ShowCase1';
import ShowCase2 from './ShowCase2';

const ShowCase = () => {
  return (
    <section className={styles.container2}>
      <ShowCase1 />
      <ShowCase2 />
    </section>
  )
}

export default ShowCase;