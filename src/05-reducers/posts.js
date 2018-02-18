/* eslint-disable */
export default function reducer(
  state = {
    posts: [],
    comments: []
  },
  action
) {
  switch (action.type) {
    case 'POSTS_RECEIVED': {
      return {
        ...state,
        posts: action.payload
      }
    }
    case 'COMMENTS_RECEIVED': {
      return {
        ...state,
        comments: action.payload
      }
    }
    default: {
      return state
    }
  }
}
