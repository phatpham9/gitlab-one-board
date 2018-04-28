import { GET_AUTHORS } from './types';

const initialState = [];

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return action.authors;
    default:
      return state;
  }
};

export default authorsReducer;
