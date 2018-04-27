const { doFetch } = require('./do-fetch');

const SCOPE = 'all';
const PER_PAGE = 100;

const issues = [];
const users = [];
const projects = [];
const labels = new Set();

const lastFetch = {};

const fetchAsync = async (page) => {
  const response = await doFetch(`issues?scope=${SCOPE}&per_page=${PER_PAGE}&page=${page}`);
  const list = await response.json();

  return list;
};

const fetchLabels = () => {
  labels.clear();
  issues.forEach(issue => issue.labels.forEach(label => labels.add(label)));
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

  lastFetch.issues = new Date();
  fetchLabels();
};

const fetchUsers = async () => {
  const response = await doFetch('users?active=true');
  const list = await response.json();
  users.length = 0;
  list.forEach(user => users.push(user));

  lastFetch.users = new Date();
};

const fetchProjects = async () => {
  const response = await doFetch('projects');
  const list = await response.json();
  projects.length = 0;
  list.forEach(project => projects.push(project));

  lastFetch.projects = new Date();
};

module.exports = {
  lastFetch,
  issues,
  users,
  projects,
  labels,
  fetchIssues,
  fetchUsers,
  fetchProjects,
  fetchLabels,
};
