import { GET_AUTHORS } from './types';

import { Users as UsersAPI } from '../../../services/api'

const getAuthors = () => async (dispatch) => {
    const authors = await UsersAPI.getUsers();
    try {
        dispatch({
            type: GET_AUTHORS,
            authors
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getAuthors,
};
