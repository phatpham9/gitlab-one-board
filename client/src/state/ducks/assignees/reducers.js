import { GET_ASSIGNEES } from './types';

const initialState = [];

const assigneesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNEES:
      return action.assignees;
    default:
      return state;
  }
};

export default assigneesReducer;
