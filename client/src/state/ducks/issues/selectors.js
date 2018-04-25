const getIssues = state => state.issues || [];
const getIssuesOpened = state => state.issues.filter(issue => issue.state === 'opened');
const getIssuesBacklog = state => getIssuesOpened(state).filter(issue => !issue.labels.includes('todo', 'doing', 'reviewing'));
const getIssuesTodo = state => getIssuesOpened(state).filter(issue => issue.labels.includes('todo'));
const getIssuesDoing = state => getIssuesOpened(state).filter(issue => issue.labels.includes('doing'));
const getIssuesReviewing = state => getIssuesOpened(state).filter(issue => issue.labels.includes('reviewing'));
const getIssuesClosed = state => state.issues.filter((issue) =>  issue.state === 'closed');


export {
  getIssues,
  getIssuesBacklog,
  getIssuesTodo,
  getIssuesDoing,
  getIssuesReviewing,
  getIssuesClosed,
};
