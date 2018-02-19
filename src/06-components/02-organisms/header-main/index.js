import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'redux-first-router-link';
import { goToPage } from '../../../04-actions/index';

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
          to="/gallery"
        >
          Galerija
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/articles"
        >
          Raksti
        </NavLink>
      </div>
    </div>
  </header>
);

const mapDispatch = { onClick: goToPage };
const mapState = ({ location }) => ({ path: location.pathname });

export default connect(mapState, mapDispatch)(HeaderMain);
