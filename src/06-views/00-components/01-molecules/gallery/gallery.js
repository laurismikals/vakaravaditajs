import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { push } from 'redux-first-router';

import getScrollbarWidth from '../../../../00-assets/js/get-scrollbar-width';

import Icon from '../../00-atoms/icon/icon';
import Image from '../../00-atoms/image/image';

import styles from './gallery.css';

const isBrowser = () => typeof window !== 'undefined' && !!window.document;

const imageArr = {
  0: '/images/head-1',
  1: '/images/raivis',
  2: '/images/raivis',
  3: '/images/head-1',
};

const DIALOG_OPENED_CLASS = 'state-dialog-opened';

export class Gallery extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = { mountChildren: false };

  body = isBrowser() && window.document.body;

  htmlElement = isBrowser() && window.document.documentElement;

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.openState();
    }
    if (isBrowser()) {
      window.addEventListener('click', this.handleClickOutside);
    }
    this.setState({ mountChildren: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      const { open } = this.props;
      if (!open) {
        this.openState();
      }
    } else {
      this.closeState();
    }
  }

  componentWillUnmount() {
    if (isBrowser()) {
      window.removeEventListener('click', this.handleClickOutside);
    }
    this.closeState();
  }

  onCloseHandler = () => {
    this.animateClose(() => push('/gallery'));
  };

  handleClickOutside = (e) => {
    if (this.content && !this.content.contains(e.target)) {
      this.onCloseHandler();
    }
  };

  animateClose(callback) {
    const options = {
      duration: 300,
      easing: 'ease-in-out',
    };
    const keyframesDialog = [
      {
        visibility: 'visible',
        opacity: 1,
      },
      {
        visibility: 'hidden',
        opacity: 0,
      },
    ];
    const keyframesContent = [
      {
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(0px)',
      },
      {
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateY(-20px)',
      },
    ];

    this.dialog.style.visibility = 'hidden';
    this.dialog.style.opacity = 0;
    if (this.content.animate) {
      this.dialog.animate(keyframesDialog, options);
      const animationContent = this.content.animate(keyframesContent, options);
      animationContent.onfinish = callback;
    } else {
      callback();
    }
  }

  animateOpen() {
    const options = {
      duration: 300,
      easing: 'ease-in-out',
    };
    const keyframesDialog = [
      {
        visibility: 'hidden',
        opacity: 0,
      },
      {
        visibility: 'visible',
        opacity: 1,
      },
    ];
    const keyframesContent = [
      {
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      {
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(0px)',
      },
    ];

    this.dialog.style.visibility = 'visible';
    this.dialog.style.opacity = 1;
    if (this.content.animate) {
      this.dialog.animate(keyframesDialog, options);
      this.content.animate(keyframesContent, options);
    }
  }

  openState() {
    this.scrollPositionWhenDialogWasOpened = this.htmlElement.scrollTop || this.body.scrollTop;
    this.body.style.top = `-${this.scrollPositionWhenDialogWasOpened}px`;
    this.body.style.height = isBrowser() && `${window.innerHeight}px`;
    this.body.style.paddingRight = `${getScrollbarWidth()}px`;

    this.body.classList.add(DIALOG_OPENED_CLASS);
    this.htmlElement.classList.add(DIALOG_OPENED_CLASS);

    this.animateOpen();
  }

  closeState() {
    this.body.classList.remove(DIALOG_OPENED_CLASS);
    this.htmlElement.classList.remove(DIALOG_OPENED_CLASS);

    this.body.style.height = '100%';
    this.body.style.top = '0px';
    this.body.style.paddingRight = '0px';
    this.htmlElement.scrollTop = this.scrollPositionWhenDialogWasOpened;
    this.body.scrollTop = this.scrollPositionWhenDialogWasOpened;
  }

  render() {
    const { id } = this.props;
    const { mountChildren } = this.state;

    return (
      <Portal>
        <div />
        <dialog
          ref={(element) => { this.dialog = element; }}
          className={styles.root}
        >
          <button
            type="button"
            className={styles.close}
          >
            <Icon icon="close" />
          </button>
          <div className={`${styles.container} container`}>
            <div
              ref={(element) => { this.content = element; }}
              className={styles.content}
            >
              {mountChildren && <Image src={imageArr[id]} alt="" />}
            </div>
          </div>
        </dialog>
      </Portal>
    );
  }
}
