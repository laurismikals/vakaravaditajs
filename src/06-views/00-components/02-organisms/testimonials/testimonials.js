import React from 'react';
import { map } from 'lodash';

import Testimonial from '../../01-molecules/testimonial/testimonial';

import styles from './testimonials.css';

const testimonialArr = [
  {
    image: '/images/ruta',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam atque beatae consequatur cum doloribus esse illum in itaque, iure omnis optio porro quaerat qui quia quo quos ratione sed sequi sint sit soluta totam ullam velit voluptatem voluptatibus?',
    name: 'Rūta',
  },
  {
    image: '/images/lauris',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, voluptatum? Lorem ipsum delectus deleniti dignissimos dolores et ex exercitationem explicabo fugit inventore ipsa ipsum iste magnam maxime minima natus nemo nulla odit optio possimus quaerat repellendus, sunt ullam! Beatae delectus ipsam numquam.',
    name: 'Lauris',
  },
  {
    image: '/images/anda',
    text: 'Aspernatur, voluptatum? Lorem ipsum delectus deleniti dignissimos dolores et ex exercitationem explicabo fugit inventore ipsa ipsum iste magnam maxime minima natus nemo nulla odit optio possimus quaerat repellendus, sunt ullam! Beatae delectus ipsam numquam.',
    name: 'Anda',
  },
];

export default () => (
  <section className={styles.testimonials}>
    <div className="container">
      <div className="row row--gutters-20 justify--center">
        {map(testimonialArr, ({ image, text, name }, i) => (
          <div key={i} className="col-s1-24 col-s4-12 col-s7-8 flex direction--column">
            <Testimonial
              className="margin-bottom-20"
              image={image}
              text={text}
              name={name}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
