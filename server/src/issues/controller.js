const { issues, fetchIssues, lastFetch } = require('../utils/gitlab-api');

const fiveMins = 5 * 60 * 1000; // 5mins

const list = async (req, res) => {
  res.json(issues);

  const currTime = new Date();

  if ((currTime - lastFetch.updated) > fiveMins) {
    await fetchIssues();
  }
};

module.exports = {
  list,
};
