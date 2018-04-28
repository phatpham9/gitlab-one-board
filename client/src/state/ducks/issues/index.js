import { getIssues, filterIssue } from './actions';
import * as issuesSelectors from './selectors';
import issuesReducers from './reducers';

export {
  // actions
  getIssues,
  filterIssue,
  // selectors
  issuesSelectors,
};

export default issuesReducers;
