import { NOT_FOUND } from 'redux-first-router';

const components = {
  HOME: 'Home',
  GALLERY: 'Gallery',
  ARTICLES: 'Articles',
  ARTICLE: 'Article',
  CONTACTS: 'Contacts',
  [NOT_FOUND]: 'NotFound',
};

export default (state = 'HOME', action = {}) => components[action.type] || state;
