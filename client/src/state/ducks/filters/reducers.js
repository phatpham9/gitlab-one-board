import { SET_CURRENT_FILTER, SET_DEFAULT_FILTER } from './types';

const initialState = {
  project: '',
  label: '',
  author: '',
  assignee: ''
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_FILTER:
      return {
        ...state,
        [action.filter.name]: action.filter.value
      }
    case SET_DEFAULT_FILTER:
      return initialState;
    default:
      return state;
  }
};

export default filtersReducer;
