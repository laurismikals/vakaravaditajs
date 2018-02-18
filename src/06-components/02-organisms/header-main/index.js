import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'redux-first-router-link';
import { goToPage } from '../../../04-actions/index';
import styles from './header-main.css';

const HeaderMain = ({ path }) => {
  const isHome = path === '/';
  return (
    <header className={`
        ${styles.headerMain}
        ${isHome ? styles.home : ''}
      `}
    >
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
            to="/list/db-graphql"
          >
            Galerija
          </NavLink>

          <NavLink
            activeClassName={styles.active}
            to={['list', 'react-redux']}
          >
            Raksti
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
};

HeaderMain.propTypes = {
  path: PropTypes.string.isRequired,
};

const mapDispatch = { onClick: goToPage };
const mapState = ({ location }) => ({ path: location.pathname });

export default connect(mapState, mapDispatch)(HeaderMain);
