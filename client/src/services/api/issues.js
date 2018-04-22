import { $get } from './base';

const PATH = 'issues';

const getIssues = async () => {
  try {
    const res = await $get(`${PATH}`);

    return res;
    
  } catch (error) {
    throw error;
  }
};

export {
  getIssues,
};
