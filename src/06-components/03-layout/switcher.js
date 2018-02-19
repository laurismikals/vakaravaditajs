import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'transition-group';
import universal from 'react-universal-component';
import PropTypes from 'prop-types';

import Loading from '../00-atoms/loading/loading';
import Error from '../Error/index';
import styles from './switcher.css';

const UniversalComponent = universal(({ page }) => import(`../${page}`), {
  minDelay: 500,
  loading: Loading,
  error: Error,
});

const Switcher = ({ page, pathname }) => (
  <TransitionGroup
    className={`${styles.switcher} next`}
    duration={500}
    prefix="fade"
  >
    <Transition key={pathname}>
      <UniversalComponent page={page} />
    </Transition>
  </TransitionGroup>
);

Switcher.propTypes = {
  page: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapState = ({ page, ...state }) => ({
  page,
  pathname: state.location.pathname,
});

export default connect(mapState)(Switcher);
