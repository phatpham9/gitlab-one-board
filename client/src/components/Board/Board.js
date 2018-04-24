import React, {Component} from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { getIssues, issuesSelectors } from '../../state/ducks/issues';

import List from './List';

import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backlog: [],
      todo: [],
      doing: [],
      reviewing: [],
      closed: [],
    };
  }

  async componentDidMount() {
    await this.props.getIssues();

    this.setState({
      backlog: this.props.issuesBacklog,
      todo: this.props.issuesTodo,
      doing: this.props.issuesDoing,
      reviewing: this.props.issuesReviewing,
      closed: this.props.issuesClosed
    });
  }

  render() {
    return(
      <Container fluid className="board">
        <Row>
          {Object.keys(this.state).map((key, index) =>
            <List
              key={index}
              title={key}
              cards={this.state[key]}
            />
          )}
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
