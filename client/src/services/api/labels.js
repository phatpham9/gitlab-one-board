import { $get } from './base';

const PATH = 'labels';

const getLabels = async () => {
  try {
    const res = await $get(`${PATH}`);

    return res;
    
  } catch (error) {
    throw error;
  }
};


export {
  getLabels,
};
