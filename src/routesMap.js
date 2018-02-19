import { redirect, NOT_FOUND } from 'redux-first-router';
import { fetchData } from './03-utilities/utils';

export default {
  HOME: {
    path: '/',
    thunk: async () => {
      // const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => response.json())
      //   .then((response) => {
      //     dispatch({
      //       type: 'POSTS_RECEIVED',
      //       payload: response,
      //     });
      //   });
      // const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')
      //   .then(response => response.json())
      //   .then((response) => {
      //     dispatch({
      //       type: 'COMMENTS_RECEIVED',
      //       payload: response,
      //     });
      //   });
      // await Promise.all([fetchPosts, fetchComments]);
    },
  },
  GALLERY: {
    path: '/gallery',
    thunk: async () => {

    },
  },
  ARTICLES: {
    path: '/articles',
    thunk: async () => {

    },
  },
  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const {
        jwToken,
        location: { payload: { category } },
        videosByCategory,
      } = getState();

      if (videosByCategory[category]) return;
      const videos = await fetchData(`/api/videos/${category}`, jwToken);

      if (videos.length === 0) {
        dispatch({ type: NOT_FOUND });
      }

      dispatch({ type: 'VIDEOS_FETCHED', payload: { videos, category } });
    },
  },
  VIDEO: {
    path: '/video/:slug',
    thunk: async () => {
      // TASK FOR YOU. YES, YOU!
      //
      // visit a VIDEO page in the app, then refresh the page, then make
      // this work when visited directly by copying the LIST route above and
      // using fetchData(`/api/video/${slug}`) and by dispatching
      // the the corresponding action type which I'll leave up to you to find
      // in ../reducers/index.js :)
    },
  },
  PLAY: {
    path: '/video/:slug/play',
    thunk: (dispatch, getState) => {
      if (typeof window === 'undefined') {
        const { slug } = getState().location.payload;
        const action = redirect({ type: 'VIDEO', payload: { slug } });

        dispatch(action);
      }
    },
  },
  LOGIN: '/login',
  ADMIN: {
    path: '/admin', // TRY: visit this path or dispatch ADMIN
    role: 'admin', // + change jwToken to 'real' in server/index.js
  },
};
