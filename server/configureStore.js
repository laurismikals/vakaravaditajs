import createHistory from 'history/createMemoryHistory';
import { NOT_FOUND } from 'redux-first-router';
import configureStore from '../src/configureStore';

const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === 'redirect') {
    res.redirect(302, pathname);
    return true;
  }
  return false;
};

export default async (req, res) => {
  const history = createHistory({ initialEntries: [req.path] });
  const { store, thunk } = configureStore(history);

  const { location } = store.getState();
  if (doesRedirect(location, res)) return false;

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

  await thunk(store); // THE PAYOFF BABY!

  const location2 = store.getState().location; // remember: state has now changed
  if (doesRedirect(location2, res)) return false; // only do this again if ur thunks have redirects

  const status = location2.type === NOT_FOUND ? 404 : 200;
  res.status(status);
  return store;
};
