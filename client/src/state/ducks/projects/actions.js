import { GET_PROJECTS } from './types';

import { Projects as ProjectsAPI } from '../../../services/api'

const getProjects = () => async (dispatch) => {
    const projects = await ProjectsAPI.getProjects();
    try {
        dispatch({
            type: GET_PROJECTS,
            projects
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getProjects,
};
