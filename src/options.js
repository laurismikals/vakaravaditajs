import { redirect } from 'redux-first-router';
import { isAllowed, isServer } from './03-utilities/utils';

export default {
  onBeforeChange: (dispatch, getState, action) => {
    console.log('onAfterChange');
    const allowed = isAllowed(action.type, getState());

    if (!allowed) {
      dispatch(redirect({
        type: 'LOGIN',
      }));
    }
  },
  onAfterChange: (dispatch, getState) => {
    console.log('onAfterChange');
    const { type } = getState().location;

    if (type === 'LOGIN' && !isServer) {
      setTimeout(() => {
        alert("NICE, You're adventurous! Try changing the jwToken cookie from 'fake' to 'real' in server/index.js (and manually refresh) to access the Admin Panel. Then 'onBeforeChange' will let you in.");
      }, 1500);
    }
  },
};
