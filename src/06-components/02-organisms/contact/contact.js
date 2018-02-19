import React from 'react';

import headingStyles from '../../00-atoms/heading/heading.css';
import styles from './contact.css';

export default () => (
  <section className={styles.contact}>
    <div className="container">
      <h2 className={`${headingStyles.primary} margin-bottom-40 text-align--center`}>
        Sāksim ar sarunu
      </h2>
      <a
        href="tel:+37128266845"
        className={styles.phone}
      >
        +371 28 266 845
      </a>
    </div>
  </section>
);

