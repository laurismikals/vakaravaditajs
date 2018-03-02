import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../00-atoms/image/image';

import textStyles from '../../00-atoms/text/text.css';
import headingStyles from '../../00-atoms/heading/heading.css';
import styles from './testimonial.css';

const Testimonial = ({
  image,
  text,
  name,
  className,
}) => (
  <section className={`${styles.testimonial} ${className}`}>
    <div className={styles.image}>
      <Image
        src={image}
        alt={name}
        x={1}
        y={1}
      />
    </div>
    <div className={`${textStyles.text} ${styles.text}`}>
      <p>{text}</p>
    </div>
    <h3 className={headingStyles.quaternary}>{name}</h3>
  </section>
);

Testimonial.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Testimonial.defaultProps = {
  className: '',
};

export default Testimonial;
