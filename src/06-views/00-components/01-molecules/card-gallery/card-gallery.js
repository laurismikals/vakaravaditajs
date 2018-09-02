import React, { PureComponent } from 'react';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

import Image from '../../00-atoms/image/image';

import styles from './card-gallery.css';

class CardGallery extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  render() {
    const {
      href,
      className,
      title,
      image,
    } = this.props;

    return (
      <Link
        to={href}
        className={`${styles.cardGallery} ${!className ? '' : className}`}
      >
        <span className={styles.image}>
          <Image
            src={image}
            alt={title}
            x={3}
            y={2}
          />
        </span>
      </Link>
    );
  }
}

export default CardGallery;
