const { issues, lastFetch, fetchIssues } = require('../utils/gitlab-api');

const INTERVAL = 5 * 60 * 1000; // 5 mins

const list = async (req, res) => {
  res.json(issues);

  if (new Date() - lastFetch > INTERVAL) {
    await fetchIssues();
  }
};

module.exports = {
  list,
};
