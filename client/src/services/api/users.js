import { $get } from './base';

const PATH = 'users';

const getUsers = async () => {
  try {
    const res = await $get(`${PATH}`);

    return res;
    
  } catch (error) {
    throw error;
  }
};


export {
  getUsers,
};
