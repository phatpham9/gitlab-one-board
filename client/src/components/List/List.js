import React from 'react';
import { connect } from 'react-redux';

import { issuesSelectors } from '../../state/ducks/issues';

import ListItem from './ListItem';

import './List.scss';

const List = ({ issues }) => (
  <div className="list-view">
    {issues.map((issue, index) =>
      <ListItem key={index} item={issue} />
    )}
  </div>
);

export default connect(
  state => ({
    issues: issuesSelectors.getIssues(state),
  }),
)(List);
