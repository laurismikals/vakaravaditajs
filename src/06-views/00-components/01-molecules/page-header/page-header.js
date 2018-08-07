import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../00-atoms/image/image';

import styles from './page-header.css';

const PageHeader = ({ className, heading }) => (
  <header className={`${styles.pageHeader} ${!className ? '' : className}`}>
    <Image
      src="/images/head-1"
      alt="Svētki Ķīpsalā"
      cover
      className={styles.image}
    />
    <div className={styles.content}>
      <div className="container">
        <h1 className={styles.heading}>
          {heading}
        </h1>
      </div>
    </div>
  </header>
);

PageHeader.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};
PageHeader.defaultProps = {
  className: '',
  heading: '',
};

export default PageHeader;
