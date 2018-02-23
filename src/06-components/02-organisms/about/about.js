import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import headingStyles from '../../00-atoms/heading/heading.css';
import textStyles from '../../00-atoms/text/text.css';
import styles from './about.css';

const About = ({ title, text }) => (
  <section className={styles.about}>
    <div className="container container--text">
      <h2 className={`${headingStyles.primary} margin-bottom-40`}>
        {title}
      </h2>
      <div className={textStyles.text}>
        <p>{text}</p>
      </div>
    </div>
  </section>
);

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(({ about: { title, text } }) => ({
  title,
  text,
}))(About);
