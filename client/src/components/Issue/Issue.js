import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardText,
  CardBody,
  Badge
} from 'reactstrap';

import './Issue.scss';

const Issue = ({issue}) => (
  <div className="issue">
    <Card>
      <CardBody>
        <div className="card-wrapper">
          <Col className="p-0 pr-3" md="10">
            <CardText className="mb-0">
              Fix: User can not login
              <span className="repo-name"> www-re</span>
            </CardText>
          </Col>
          <Col className="p-0 text-right" md="2">
            <img width="20" className="rounded-circle" src="https://getbootstrapadmin.com/remark/global/portraits/9.jpg" alt="avatar" />
          </Col>
        </div>
        <Badge href="#" color="primary">Primary</Badge>
        <Badge href="#" color="danger">Primary</Badge>
        <Badge href="#" color="success">Primary</Badge>
      </CardBody>
    </Card>
  </div>
);

const propTypes = {
  issue: PropTypes.object.isRequired,
};

Issue.propTypes = propTypes;

export default Issue;
