import React from 'react';
import Link from 'redux-first-router-link';
import PropTypes from 'prop-types';

import Image from '../../00-atoms/image/image';

import styles from './card-article.css';
import textStyles from '../../00-atoms/text/text.css';

const CardArticle = ({
  href,
  className,
  title,
  text,
  image,
}) => (
  <Link
    to={href}
    className={`${styles.cardArticle} ${!className ? '' : className}`}
  >
    <span className={styles.image}>
      <Image
        src={image}
        alt={title}
        x={3}
        y={2}
      />
    </span>
    <span className={styles.left}>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={textStyles.text}>
        {text}
      </p>
    </span>
  </Link>
);

CardArticle.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
CardArticle.defaultProps = {
  className: '',
};

export default CardArticle;
