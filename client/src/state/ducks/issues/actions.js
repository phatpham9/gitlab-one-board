import {
    GET_ISSUES
} from './types';

import { IssueAPI } from '../../../services/api'

const getIssues = () => async (dispatch) => {
    const issues = await IssueAPI.getIssues();
    try {
        dispatch({
            type: GET_ISSUES,
            issues
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getIssues,
};
