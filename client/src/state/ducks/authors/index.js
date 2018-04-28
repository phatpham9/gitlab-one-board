import { getAuthors } from './actions';
import * as authorsSelectors from './selectors';
import authorsReducers from './reducers';

export {
  // actions
  getAuthors,
  // selectors
  authorsSelectors,
};

export default authorsReducers;
