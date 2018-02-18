/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'transition-group';
import universal from 'react-universal-component';

import Loading from '../00-atoms/loading/index';
import Error from '../Error/index';
import isLoading from '../../selectors/isLoading';
import styles from './switcher.css';

const UniversalComponent = universal(({ page }) => import(`../${page}`), {
  minDelay: 500,
  loading: Loading,
  error: Error,
});

const Switcher = ({ page, loading, pathname }) => (
  <TransitionGroup
    className={`${styles.switcher} next`}
    duration={500}
    prefix="fade"
  >
    <Transition key={pathname}>
      <UniversalComponent page={page} isLoading={loading} />
    </Transition>
  </TransitionGroup>
);

const mapState = ({ page, ...state }) => ({
  page,
  pathname: state.location.pathname,
  loading: isLoading(state),
});

export default connect(mapState)(Switcher);
