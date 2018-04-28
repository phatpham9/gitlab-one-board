import { GET_PROJECTS } from './types';

const initialState = [];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
