import React from 'react';

// import Image from '../../00-atoms/image/image';

import headingStyles from '../../00-atoms/heading/heading.css';
import textStyles from '../../00-atoms/text/text.css';
import styles from './about.css';

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at corporis dolorem esse excepturi iure minima praesentium repellat veritatis, voluptas! Animi corporis deleniti ea enim ex iusto nesciunt nobis possimus recusandae vel. Accusamus consequatur deserunt enim esse libero, maiores nam, nostrum quaerat quam quas, quisquam sit tempora totam voluptatem voluptatibus.';

export default () => (
  <section className={styles.about}>
    <div className="container">
      <div className="container--text">
        <h2 className={`${headingStyles.primary} margin-bottom-20`}>Svētki, svētki!</h2>
        <div className={textStyles.text}>
          <p>{TEXT}</p>
        </div>
      </div>
    </div>
  </section>
);

