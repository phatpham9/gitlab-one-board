import { getIssues } from './actions';
import * as issuesSelectors from './selectors';
import issuesReducers from './reducers';

export {
  // actions
  getIssues,
  // selectors
  issuesSelectors,
};

export default issuesReducers;
