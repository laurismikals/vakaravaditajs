import React from 'react';

import headingStyles from '../../00-atoms/heading/heading.css';
import textStyles from '../../00-atoms/text/text.css';
import styles from './about.css';

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eos eum ex ipsa nostrum possimus repudiandae, totam veniam veritatis! A ad adipisci aliquam amet, aperiam aspernatur commodi culpa delectus dignissimos dolorum ea eos eum facilis hic impedit inventore ipsam iste laborum minima mollitia nam nihil, nobis omnis optio pariatur perspiciatis quae qui quos repudiandae rerum saepe sint, sit soluta unde veniam vero vitae. Asperiores corporis omnis provident quo repellendus veritatis!';

export default () => (
  <section className={styles.about}>
    <div className="container container--text">
      <h2 className={`${headingStyles.primary} margin-bottom-40`}>
        Par mani
      </h2>
      <div className={textStyles.text}>
        <p>{TEXT}</p>
      </div>
    </div>
  </section>
);

