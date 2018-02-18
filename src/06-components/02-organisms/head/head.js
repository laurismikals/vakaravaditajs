import React from 'react';

import Image from '../../00-atoms/image/image';

import styles from './head.css';

export default () => (
  <div className={styles.head}>
    <Image
      src="/images/head.jpg"
      alt="Vakara vadītājs Raivis Bružis"
      cover
      className={styles.image}
    />
    <div className={styles.textWrap}>
      <div className="container">
        <p className={styles.text}>
          <span className={styles.profession}>Vakara vadītājs</span><br />
          <span className={styles.name}>Raivis</span><br />
          <span className={styles.surname}>Bružis</span>
        </p>
      </div>
    </div>
  </div>
);

