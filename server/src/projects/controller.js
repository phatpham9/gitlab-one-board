const { projects, lastFetch, fetchProjects } = require('../utils/gitlab-api');

const INTERVAL = 5 * 60 * 1000; // 5 mins

const list = async (req, res) => {
  res.json(projects);

  if (new Date() - lastFetch.projects > INTERVAL) {
    await fetchProjects();
  }
};

module.exports = {
  list,
};
