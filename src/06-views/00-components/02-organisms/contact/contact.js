import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../00-atoms/image/image';

import headingStyles from '../../00-atoms/heading/heading.css';
import styles from './contact.css';

const Contact = ({ image }) => (
  <section className={styles.contact}>
    {image &&
      <Image
        src="/images/raivis-2"
        alt="Vakara vadītājs Raivis Bružis"
        cover
        className={styles.image}
      />
    }
    <div className={styles.container}>
      <div className="container">
        <h2 className={`${styles.heading} ${headingStyles.primary} margin-bottom-40 text-align--center`}>
          Sāksim ar sarunu
        </h2>
        <a
          href="tel:+37128266845"
          className={styles.phone}
        >
          +371 28 266 845
        </a>
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  image: PropTypes.bool,
};
Contact.defaultProps = {
  image: false,
};

export default Contact;
