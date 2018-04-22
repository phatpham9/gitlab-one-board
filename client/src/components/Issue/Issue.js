import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardText,
  CardBody,
  Badge
} from 'reactstrap';

import './Issue.scss';

const Issue = ({issue}) => {
  const idIssue = issue.iid;
  const title = issue.title || 'N/A';
  const repoName = /^(http[s]?:\/\/[a-zA-Z0-9.\-_]+\/(.*))\/issues/.exec(issue.web_url)[2];
  const avatarUrl = issue.assignee && issue.assignee.avatar_url;
  return(
    <div className="issue"> 
      <Card>
        <CardBody>
          <div className="card-wrapper">
            <Col className="p-0 pr-2" md="10">
              <CardText className="mb-0">
                {title}
                <span className="repo-name"> {`${repoName}#${idIssue}`}</span>
              </CardText>
            </Col>
            <Col className="p-0 text-right" md="2">
            { avatarUrl &&
              <img width="20" className="rounded-circle" src={avatarUrl} alt="avatar" />
            }
            </Col>
          </div>
          { issue.labels.length > 0 &&
            issue.labels.map(label => {
              const bagleSplit = label.split(':');
              const bagle = bagleSplit.length !== 1 ? bagleSplit[1] : bagleSplit[0];
              return(
                <Badge key={label} color={bagle}>
                  {label}
                </Badge>
              )
            })
          }
        </CardBody>
      </Card>
    </div>
  );
};

const propTypes = {
  issue: PropTypes.object.isRequired,
};

Issue.propTypes = propTypes;

export default Issue;
