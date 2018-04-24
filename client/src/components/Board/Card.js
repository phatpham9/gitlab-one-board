import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  CardText,
  CardBody,
  Badge,
} from 'reactstrap';

import './Card.scss';

const propTypes = {
  card: PropTypes.object.isRequired,
};

const Card = ({ card }) => {
  const idCard = card.iid;
  const webUrl = card.web_url;
  const title = card.title || 'N/A';
  const repoName = /^(http[s]?:\/\/[a-zA-Z0-9.\-_]+\/(.*))\/issues/.exec(card.web_url)[2];
  const avatarUrl = card.assignee && card.assignee.avatar_url;

  return(
    <div className="card">
      <a target="_blank" href={webUrl}>
        <CardBody>
          <div className="card-wrapper">
            <Col className="p-0 pr-2" md="10">
              <CardText className="mb-0">
                {title}
                <span className="repo-name"> {`${repoName}#${idCard}`}</span>
              </CardText>
            </Col>
            <Col className="p-0 text-right" md="2">
            { avatarUrl &&
              <img width="20" className="rounded-circle" src={avatarUrl} alt="avatar" />
            }
            </Col>
          </div>
          { card.labels.length > 0 &&
            card.labels.map(label =>
              <Badge
                key={label}
                color='default'>
                {label}
              </Badge>
            )
          }
        </CardBody>
      </a>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
