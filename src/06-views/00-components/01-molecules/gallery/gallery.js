import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-portal-minimal';
import { push } from 'redux-first-router';

import getScrollbarWidth from '../../../../00-assets/js/get-scrollbar-width';

import Icon from '../../00-atoms/icon/icon';
import Image from '../../00-atoms/image/image';

import styles from './gallery.css';

const isBrowser = () => typeof window !== 'undefined' && !!window.document;

const useDisableScroll = () => {
  const DIALOG_OPENED_CLASS = 'state-dialog-opened';
  const body = isBrowser() && window.document.body;
  const htmlElement = isBrowser() && window.document.documentElement;
  let scrollPositionWhenDialogWasOpened;

  const disable = () => {
    scrollPositionWhenDialogWasOpened = htmlElement.scrollTop || body.scrollTop;
    body.style.top = `-${scrollPositionWhenDialogWasOpened}px`;
    body.style.height = isBrowser() && `${window.innerHeight}px`;
    body.style.paddingRight = `${getScrollbarWidth()}px`;

    body.classList.add(DIALOG_OPENED_CLASS);
    htmlElement.classList.add(DIALOG_OPENED_CLASS);
  };

  const enable = () => {
    body.classList.remove(DIALOG_OPENED_CLASS);
    htmlElement.classList.remove(DIALOG_OPENED_CLASS);

    body.style.height = '100%';
    body.style.top = '0px';
    body.style.paddingRight = '0px';
    htmlElement.scrollTop = scrollPositionWhenDialogWasOpened;
    body.scrollTop = scrollPositionWhenDialogWasOpened;
  };

  useEffect(() => {
    disable();
    return enable;
  });
};

const useClick = onClick => useEffect(() => {
  setTimeout(() => window.addEventListener('click', onClick), 0);
  return () => window.removeEventListener('click', onClick);
});

const keepInBetween = (min, max) => (number) => {
  if (number < min) { return max; }
  if (number > max) { return min; }
  return number;
};

export const Gallery = ({
  open,
  id,
  galleryArr,
}) => {
  const content = useRef(null);

  const handleClickOutside = (e) => {
    if (content.current && !content.current.contains(e.target)) {
      push('/gallery');
    }
  };

  useClick(handleClickOutside);
  useDisableScroll();

  const prevHandler = () => push(`/gallery/${keepInBetween(0, galleryArr.length - 1)(id - 1)}`);
  const nextHandler = () => push(`/gallery/${keepInBetween(0, galleryArr.length - 1)(id + 1)}`);

  return (
    <Portal>
      <dialog
        className={styles.root}
        open={open}
      >
        <button
          type="button"
          className={styles.close}
        >
          <Icon icon="close" />
        </button>
        <div className={`${styles.container} container`}>
          <div
            ref={content}
            className={styles.content}
          >
            <div className={styles.imageWrap}>
              <Image
                src={galleryArr[id].image}
                alt={galleryArr[id].title}
                cover
                className={styles.image}
              />
            </div>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prevHandler}
            >
              <Icon icon="arrow-short-left" />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={nextHandler}
            >
              <Icon icon="arrow-short-right" />
            </button>
          </div>
        </div>
      </dialog>
    </Portal>
  );
};

Gallery.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  galleryArr: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};
