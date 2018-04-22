import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { issuesSelectors } from '../../state/ducks/issues';

import BoardItem from './BoardItem';

import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          name: 'backlog',
          issues: []
        }, {
          name: 'todo',
          issues: []
        }, {
          name: 'doing',
          issues: []
        }, {
          name: 'reviewing',
          issues: []
        }, {
          name: 'close',
          issues: []
        }
      ]
    }
  }

  renderBoards(boards) {
    if(!boards.length) return;
    return boards.map(board =>
      <BoardItem
        key={board.name}
        title={board.name}
        issues={board.issues}
      />
    )
  }

  render() {
    return(
      <Container fluid className="mt-5 mb-3">
        <Row>
          {
            this.renderBoards(this.state.boards)
          }
        </Row>
      </Container>
    );
  }
}

export default connect(
  state => ({
    issuesByBackLog: issuesSelectors.getIssuesByBackLog(state),
    issuesByTodo: issuesSelectors.getIssuesByTodo(state),
    issuesByDoing: issuesSelectors.getIssuesByDoing(state),
    issuesByReview: issuesSelectors.getIssuesByReview(state),
    issuesByClose: issuesSelectors.getIssuesByClose(state),
  }), {},
)(Board);
