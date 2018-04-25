import { SET_CURRENT_VIEW } from './types';

const initialState = 'board';

const currentViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_VIEW:
      return action.view;
    default:
      return state;
  }
};

export default currentViewReducer;
