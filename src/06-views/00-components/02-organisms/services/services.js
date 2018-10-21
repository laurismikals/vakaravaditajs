import React from 'react';

import headingStyles from '../../00-atoms/heading/heading.css';
import textStyles from '../../00-atoms/text/text.css';
import styles from './services.css';

export default () => (
  <section className={styles.services}>
    <div className="container">
      <h2 className={`${headingStyles.primary} margin-bottom-40 text-align--center`}>
        Servisi
      </h2>
      <div className={textStyles.text}>
        <div className="row row--gutters-20">
          <div className="col-s1-24 col-s3-12 col-s6-8 margin-bottom-10">
            <ul>
              <li>Pasākumu vadīšana</li>
              <li>Pasākumu organizēšana</li>
              <li>Scenāriju izstrāde</li>
            </ul>
          </div>
          <div className="col-s1-24 col-s3-12 col-s6-8 margin-bottom-10">
            <ul>
              <li>Pasākumu organizēšana</li>
              <li>Pasākumu vadīšana</li>
              <li>Scenāriju izstrāde</li>
            </ul>
          </div>
          <div className="col-s1-24 col-s3-12 col-s6-8 margin-bottom-10">
            <ul>
              <li>Pasākumu vadīšana</li>
              <li>Pasākumu organizēšana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
