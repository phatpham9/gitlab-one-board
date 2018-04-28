const filterIssues = (issues, filters) => {
  let filteredIssues = [ ...issues ];

  for (let k in filters) {
    if(filters[k]){
      switch(k) {
        case 'project':
          filteredIssues = filteredIssues.filter(issue => issue.project_id === +filters[k])
          break;
        case 'author':
          filteredIssues = filteredIssues.filter(issue => issue.author && issue.author.id === +filters[k])
          break;
        case 'assignee':
          filteredIssues = filteredIssues.filter(issue => issue.assignee && (issue.assignee.id === +filters[k]))
          break;
        default: 
          filteredIssues = filteredIssues.filter(issue => issue.labels.includes(filters[k]))
      }
    }
  }
  
  return filteredIssues;
};

const getIssues = state => filterIssues(state.issues, state.filters);
const getIssuesOpened = state => filterIssues(state.issues.filter(issue => issue.state === 'opened'), state.filters);
const getIssuesBacklog = state => filterIssues(getIssuesOpened(state).filter(issue => !issue.labels.includes('todo', 'doing', 'reviewing')), state.filters);
const getIssuesTodo = state => filterIssues(getIssuesOpened(state).filter(issue => issue.labels.includes('todo')), state.filters);
const getIssuesDoing = state => filterIssues(getIssuesOpened(state).filter(issue => issue.labels.includes('doing')), state.filters);
const getIssuesReviewing = state => filterIssues(getIssuesOpened(state).filter(issue => issue.labels.includes('reviewing')), state.filters);
const getIssuesClosed = state => filterIssues(state.issues.filter((issue) =>  issue.state === 'closed'), state.filters);

export {
  getIssuesBacklog,
  getIssuesTodo,
  getIssuesDoing,
  getIssuesReviewing,
  getIssuesClosed,
  getIssues
};
