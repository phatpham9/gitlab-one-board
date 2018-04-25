const { users, lastFetch, fetchUsers } = require('../utils/gitlab-api');

const INTERVAL = 5 * 60 * 1000; // 5 mins

const list = async (req, res) => {
  res.json(users);

  if (new Date() - lastFetch.users > INTERVAL) {
    await fetchUsers();
  }
};

module.exports = {
  list,
};
