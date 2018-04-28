import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { issuesSelectors } from '../../state/ducks/issues';

import List from './List';

import './Board.scss';

const Board = ({ issuesBacklog, issuesTodo, issuesDoing, issuesReviewing, issuesClosed }) => (
  <Container fluid className="board">
    <Row>
      <List title="backlog" cards={issuesBacklog} />
      <List title="todo" cards={issuesTodo} />
      <List title="doing" cards={issuesDoing} />
      <List title="reviewing" cards={issuesReviewing} />
      <List title="closed" cards={issuesClosed} />
    </Row>
  </Container>
);

export default connect(
  state => ({
    issuesBacklog: issuesSelectors.getIssuesBacklog(state),
    issuesTodo: issuesSelectors.getIssuesTodo(state),
    issuesDoing: issuesSelectors.getIssuesDoing(state),
    issuesReviewing: issuesSelectors.getIssuesReviewing(state),
    issuesClosed: issuesSelectors.getIssuesClosed(state),
  }),
)(Board);
