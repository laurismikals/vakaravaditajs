import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

import styles from './image.css';

export default class Image extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { src } = this.props;
    if (src !== nextProps.src) {
      this.setState({
        loaded: false,
      });
    }
  }

  loadHandler() {
    const { loaded } = this.state;
    this.setState({
      loaded: !loaded,
    });
  }

  render() {
    const {
      className = '',
      x = null,
      y = null,
      src,
      alt,
      cover = false,
    } = this.props;
    const { loaded } = this.state;
    return (
      <figure
        className={`
          ${className}
          ${styles.image}
          ${x && y ? styles.imageAspect : ''}
          ${loaded ? styles.imageLoaded : styles.imageLoading}
          ${cover ? 'image--cover' : ''}
        `}
        style={(x && y) && { padding: `0 0 ${(y * 100) / x}% 0` }}
      >
        <LazyLoad
          offsetVertical={500}
        >
          <picture>
            <source srcSet={`${src}.webp`} type="image/webp" />
            <source srcSet={`${src}.jpg`} type="image/jpeg" />
            <img src={`${src}.jpg`} alt={alt} onLoad={() => this.loadHandler()} />
          </picture>
        </LazyLoad>
        <span className={styles.imageLoadingAnimation} />
      </figure>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  cover: PropTypes.bool,
};
Image.defaultProps = {
  className: '',
  x: null,
  y: null,
  cover: false,
};
