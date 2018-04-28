import { GET_LABELS } from './types';

const initialState = [];

const labelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LABELS:
      return action.labels;
    default:
      return state;
  }
};

export default labelsReducer;
