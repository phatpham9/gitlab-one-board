const { doFetch } = require('./doFetch');

const SCOPE = 'all';
const PER_PAGE = 100;
const issues = [];
const lastFetch = {};

const fetchAsync = async (page) => {
  const response = await doFetch(`issues?scope=${SCOPE}&per_page=${PER_PAGE}&page=${page}`);
  const list = await response.json();
  return list;
};

const fetchIssues = async () => {
  const page = 1;

  const response = await doFetch(`issues?scope=${SCOPE}&per_page=${PER_PAGE}&page=${page}`);
  const totalPage = response.headers.get('x-total-pages');

  const list = await response.json();
  issues.length = 0;
  list.forEach(issue => issues.push(issue));

  const promises = [];
  for (let i = 2; i <= totalPage; i += 1) {
    promises.push(fetchAsync(i));
  }

  const remainIssues = await Promise.all(promises);
  remainIssues.forEach(item => item.forEach(issue => issues.push(issue)));

  lastFetch.updated = new Date();
};


module.exports = {
  fetchIssues,
  issues,
  lastFetch,
};
