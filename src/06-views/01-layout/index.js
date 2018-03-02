import React, { Component } from 'react';

/* Global css that in source order comes before all other css */
import '../../00-assets/css/index.css';

import HeaderMain from '../00-components/02-organisms/header-main/index';
import FooterMain from '../00-components/02-organisms/footer-main/footer-main';
import Switcher from './switcher';

export default class Layout extends Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      // Register a service worker hosted at the root of the
      // site using the default scope.
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service worker registration succeeded:', registration);
        })
        .catch((error) => {
          console.log('Service worker registration failed:', error);
        });
    } else {
      console.log('Service workers are not supported.');
    }
  }
  render() {
    return (
      <div className="site">
        <HeaderMain />
        <main>
          <Switcher />
        </main>
        <FooterMain />
      </div>
    );
  }
}
