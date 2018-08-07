import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import universal from 'react-universal-component';

import Loading from '../00-components/00-atoms/loading/loading';
import Error from '../Error/index';

const UniversalComponent = universal(({ page }) => import(`../${page}`), {
  minDelay: 500,
  loading: Loading,
  error: Error,
});

const Switcher = ({ page }) => <UniversalComponent page={page} />;

Switcher.propTypes = {
  page: PropTypes.string.isRequired,
};

const mapState = ({ page }) => ({
  page,
});

export default connect(mapState)(Switcher);
