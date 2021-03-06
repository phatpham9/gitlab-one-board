const { labels, lastFetch, fetchIssues } = require('../utils/gitlab-api');

const INTERVAL = 5 * 60 * 1000; // 5 mins

const list = async (req, res) => {
  res.json(Array.from(labels));

  if (new Date() - lastFetch.issues > INTERVAL) {
    await fetchIssues();
  }
};

module.exports = {
  list,
};
