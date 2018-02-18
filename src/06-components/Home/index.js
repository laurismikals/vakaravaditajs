/* eslint-disable */
import React, { Component } from 'react';

import Head from '../02-organisms/head/head';
import About from '../02-organisms/about/about';
import Testimonials from '../02-organisms/testimonials/testimonials';

import styles from './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head/>
        <About/>
        <Testimonials/>
      </div>
    )
  }
}
