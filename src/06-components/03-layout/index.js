import React from 'react';

/* Global css that in source order comes before all other css */
import '../../00-assets/css/index.css';

import HeaderMain from '../02-organisms/header-main/index';
import Switcher from './switcher';

export default () => (
  <div className="site">
    <HeaderMain />
    <main>
      <Switcher />
    </main>
  </div>
);
