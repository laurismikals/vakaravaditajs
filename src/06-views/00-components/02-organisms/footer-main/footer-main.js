import React from 'react';

import NavSocial from '../../01-molecules/nav-social/nav-social';

import textStyles from '../../00-atoms/text/text.css';
import styles from './footer-main.css';

export default () => (
  <footer className={styles.footerMain}>
    <div className="container">
      <div className={styles.inner}>
        <div className={textStyles.text}>
          <p>
            <a
              className={styles.link}
              href="tel:+37128266845"
            >
              +371 28266845
            </a>
          </p>
        </div>
        <NavSocial />
      </div>
    </div>
  </footer>
);
