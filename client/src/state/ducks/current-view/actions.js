import { SET_CURRENT_VIEW } from './types';

const setCurrentView = view => ({
  type: SET_CURRENT_VIEW,
  view,
});

export {
  setCurrentView,
};
