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
    if (this.props.src !== nextProps.src) {
      this.setState({
        loaded: false,
      });
    }
  }
  loadHandler() {
    this.setState({
      loaded: !this.state.loaded,
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
    return (
      <figure
        className={`
          ${className}
          ${styles.image}
          ${x && y ? styles.imageAspect : ''}
          ${this.state.loaded ? styles.imageLoaded : styles.imageLoading}
          ${cover ? styles.imageCover : ''}
        `}
        style={(x && y) && { padding: `0 0 ${(y * 100) / x}% 0` }}
      >
        <LazyLoad
          offsetVertical={500}
        >
          <img
            src={src}
            alt={alt}
            onLoad={() => this.loadHandler()}
          />
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
