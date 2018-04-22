import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import Issue from '../Issue';

import './BoardItem.scss';

const BoardItem = ({title, issues}) => (
  <Col className="board-item" md="3" sm="12">
    <div className={`panel panel-${title} panel-line`}>
        <div className="panel-heading">
          <h3 className="panel-title text-capitalize">{title}</h3>
        </div>
        <div className="panel-body">
        { issues.length > 0 &&
            issues.map(issue => 
              <Issue issue/>
            )
        }
        </div>
    </div>
  </Col>
);

const propTypes = {
  title: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired
};

BoardItem.propTypes = propTypes;

export default BoardItem;
