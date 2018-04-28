import { GET_ASSIGNEES } from './types';

import { Users as UsersAPI } from '../../../services/api'

const getAssignees = () => async (dispatch) => {
    const assignees = await UsersAPI.getUsers();
    try {
        dispatch({
            type: GET_ASSIGNEES,
            assignees
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getAssignees,
};
