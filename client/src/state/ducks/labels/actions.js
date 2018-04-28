import { GET_LABELS } from './types';

import { Labels as LabelsAPI } from '../../../services/api'

const getLabels = () => async (dispatch) => {
    const labels = await LabelsAPI.getLabels();
    try {
        dispatch({
            type: GET_LABELS,
            labels
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    }
};

export {
    getLabels,
};
