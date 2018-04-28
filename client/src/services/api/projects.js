import { $get } from './base';

const PATH = 'projects';

const getProjects = async () => {
  try {
    const res = await $get(`${PATH}`);

    return res;
    
  } catch (error) {
    throw error;
  }
};


export {
  getProjects,
};
