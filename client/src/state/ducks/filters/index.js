import { setCurrentFilter, setDefaultFilter } from './actions';
import * as filtersSelectors from './selectors';
import filtersReducers from './reducers';

export {
  // actions
  setCurrentFilter,
  setDefaultFilter,
  // selectors
  filtersSelectors,
};

export default filtersReducers;
