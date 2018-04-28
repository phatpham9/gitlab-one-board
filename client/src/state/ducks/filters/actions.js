import { SET_CURRENT_FILTER, SET_DEFAULT_FILTER } from './types';

const setCurrentFilter = filter => ({
    type: SET_CURRENT_FILTER,
    filter,
});

const setDefaultFilter = filter => ({
    type: SET_DEFAULT_FILTER,
    filter,
});

export {
    setCurrentFilter,
    setDefaultFilter,
};
