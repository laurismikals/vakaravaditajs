import React from 'react';
import PropTypes from 'prop-types';
import svg4everybody from 'svg4everybody';

import styles from './icon.css';

if (typeof window !== 'undefined') {
  svg4everybody();
}

const Icon = ({ className = '', icon }) => (
  <svg className={`${styles.icon} ${className}`}>
    <use
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref={`/dist/icons-sprite.svg#${icon}`}
    />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Icon.defaultProps = {
  className: '',
};

export default Icon;
