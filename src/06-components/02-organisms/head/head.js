import React from 'react';

import Image from '../../00-atoms/image/image';

import styles from './head.css';

export default () => (
  <section className={styles.head}>
    <Image
      src="/images/head.jpg"
      alt="Vakara vadītājs Raivis Bružis"
      cover
      className={styles.image}
    />
    <div className={styles.textWrap}>
      <div className="container">
        <h1 className={styles.text}>
          <span className={styles.profession}>Vakara vadītājs</span><br />
          <span className={styles.name}>Raivis</span><br />
          <span className={styles.surname}>Bružis</span>
        </h1>
      </div>
    </div>
  </section>
);

