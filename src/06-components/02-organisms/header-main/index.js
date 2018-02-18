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
          HOME
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          to="/list/db-graphql"
        >
          DB & GRAPHQL
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          to={['list', 'react-redux']}
        >
          REACT & REDUX
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          to={{ type: 'LIST', payload: { category: 'fp' } }}
        >
          FP
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          to={{ type: 'ADMIN' }}
        >
          ADMIN
        </NavLink>
      </div>
    </div>
  </header>
);

const mapDispatch = { onClick: goToPage };
const mapState = ({ location }) => ({ path: location.pathname });

export default connect(mapState, mapDispatch)(HeaderMain);
