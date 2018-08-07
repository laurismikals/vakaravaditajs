import React from 'react';

import PageHeader from '../00-components/01-molecules/page-header/page-header';

import textStyles from '../00-components/00-atoms/text/text.css';

export default () => (
  <div>
    <PageHeader
      className="margin-bottom-50"
      heading="Lorem ipsum dolor sit amet."
    />
    <div className="width-100 margin-bottom-80">
      <div className={`container container--text ${textStyles.text}`}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores autem dolor ducimus harum modi nemo repudiandae rerum sed tempora unde.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
          <li>Lorem ipsum dolor sit amet, consectetur.</li>
        </ul>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolorem?
        </blockquote>
      </div>
    </div>
  </div>
);
