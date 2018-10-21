import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

import Image from '../../00-atoms/image/image';

import styles from './gallery.css';

const imageArr = {
  0: '/images/head-1',
  1: '/images/raivis',
  2: '/images/raivis',
  3: '/images/head-1',
};

export class Gallery extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  render() {
    const { id } = this.props;

    return (
      <Portal>
        <div />
        <div className={styles.root}>
          <div className={styles.image}>
            <Image
              src={imageArr[id]}
              alt=""
            />
          </div>
        </div>
      </Portal>
    );
  }
}
