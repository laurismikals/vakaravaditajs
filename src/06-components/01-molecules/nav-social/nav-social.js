import React from 'react';

import Icon from '../../00-atoms/icon/icon';

import styles from './nav-social.css';

export default () => (
  <nav className={styles.navSocial}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <a
          href="https://www.facebook.com/raivis.bruzis"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Icon
            icon="facebook"
          />
        </a>
      </li>
    </ul>
  </nav>
);
