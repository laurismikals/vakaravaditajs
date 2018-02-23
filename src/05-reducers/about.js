/* eslint-disable */
export default function reducer(
  state = {
    title: '',
    text: '',
  },
  action
) {
  switch (action.type) {
    case 'ABOUT_RECEIVED': {
      const { title, text} = action.payload;
      return {
        ...state,
        title: title,
        text: text,
      }
    }
    default: {
      return state
    }
  }
}
