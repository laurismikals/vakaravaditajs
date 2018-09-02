import React, { Fragment } from 'react';

import Head from '../00-components/02-organisms/head/head';
import About from '../00-components/02-organisms/about/about';
import Testimonials from '../00-components/02-organisms/testimonials/testimonials';
import Services from '../00-components/02-organisms/services/services';
import Contact from '../00-components/02-organisms/contact/contact';

export default () => (
  <Fragment>
    <Head />
    <About />
    <Testimonials />
    <Services />
    <Contact />
  </Fragment>
);
