import { setCurrentView } from './actions';
import * as currentViewSelectors from './selectors';
import currentViewReducers from './reducers';

export {
  // actions
  setCurrentView,
  // selectors
  currentViewSelectors,
};

export default currentViewReducers;
