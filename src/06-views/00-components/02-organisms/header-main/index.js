import React from 'react';
import { NavLink } from 'redux-first-router-link';

import styles from './header-main.css';

const HeaderMain = () => (
  <header className={styles.headerMain}>
    <div className={`container ${styles.container}`}>
      <div className={styles.inner}>
        <NavLink
          activeClassName={styles.active}
          exact
          to="/"
        >
          Sākums
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/articles"
        >
          Raksti
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/contacts"
        >
          Kontakti
        </NavLink>
      </div>
    </div>
  </header>
);

export default HeaderMain;
