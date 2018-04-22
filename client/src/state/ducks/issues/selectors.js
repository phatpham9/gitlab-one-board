const getIssues = state => state.issues;
const getIssuesByBackLog = state => state.issues.filter((issue) => issue.state === 'hold-on');
const getIssuesByTodo = state => state.issues.filter((issue) => issue.state === 'todo');
const getIssuesByDoing = state => state.issues.filter((issue) => issue.state === 'doing');
const getIssuesByReview = state => state.issues.filter((issue) => issue.state === 'review');
const getIssuesByClose = state => state.issues.filter((issue) => issue.state === 'close');

export {
  getIssues,
  getIssuesByBackLog,
  getIssuesByTodo,
  getIssuesByDoing,
  getIssuesByReview,
  getIssuesByClose
};
