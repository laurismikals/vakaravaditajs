import React from 'react';

import textStyles from '../../00-atoms/text/text.css';
import styles from './footer-main.css';

export default () => (
  <footer className={styles.footerMain}>
    <div className="container">
      <div className={textStyles.text}>
        <p>&copy; Raivis Bružis visas tiesības aizsargātas</p>
      </div>
    </div>
  </footer>
);
