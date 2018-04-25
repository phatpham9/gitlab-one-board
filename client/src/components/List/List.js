import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIssues, issuesSelectors } from '../../state/ducks/issues';

import ListItem from './ListItem';

import './List.scss';

class List extends Component {
  async componentDidMount() {
    await this.props.getIssues();
  }

  render() {
    return(
      <div className="list-view">
        {this.props.issues.map((issue, index) =>
          <ListItem key={index} item={issue} />
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    issues: issuesSelectors.getIssues(state),
  }), {
    getIssues,
  },
)(List);
