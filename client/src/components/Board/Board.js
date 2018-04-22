import React, {Component} from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import { connect } from 'react-redux';
import { getIssues, issuesSelectors } from '../../state/ducks/issues';

import BoardItem from './BoardItem';

import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backlog: [],
      todo: [],
      doing: [],
      reviewing: [],
      closed: []
    }
  }

  async componentDidMount() {
    await this.props.getIssues();    
    this.setState({
      backlog: this.props.issuesBacklog,
      todo: this.props.issuesTodo,
      doing: this.props.issuesDoing,
      reviewing: this.props.issuesReviewing,
      closed: this.props.issuesClosed
    })
  }

  renderBoards(boards) {
    // if(!boards.length) return;
    return Object.keys(boards).map((key, index) =>
      <BoardItem
        key={index}
        title={key}
        issues={boards[key]}
      />
    )
  }

  render() {
    return(
      <Container fluid className="board mt-5 mb-2">
        <Row>
          {
            this.renderBoards(this.state)
          }
        </Row>
      </Container>
    );
  }
}

export default connect(
  state => ({
    issuesBacklog: issuesSelectors.getIssuesBacklog(state),
    issuesTodo: issuesSelectors.getIssuesTodo(state),
    issuesDoing: issuesSelectors.getIssuesDoing(state),
    issuesReviewing: issuesSelectors.getIssuesReviewing(state),
    issuesClosed: issuesSelectors.getIssuesClosed(state),
  }), {
    getIssues
  },
)(Board);
