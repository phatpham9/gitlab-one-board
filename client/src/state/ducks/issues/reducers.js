import {
  GET_ISSUES,
} from './types';

const initialState = [];

const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        ...action.issues
      }
    default:
      return state;
  }
};
  
export default issuesReducer;
