import { getProjects } from './actions';
import * as projectsSelectors from './selectors';
import projectsReducers from './reducers';

export {
  // actions
  getProjects,
  // selectors
  projectsSelectors,
};

export default projectsReducers;
