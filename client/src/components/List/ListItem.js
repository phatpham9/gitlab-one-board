import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  CardText,
  CardBody,
  Badge,
} from 'reactstrap';

import './ListItem.scss';

const propTypes = {
  item: PropTypes.object.isRequired,
};

const ListItem = ({ item }) => {
  const idCard = item.iid;
  const webUrl = item.web_url;
  const title = item.title || 'N/A';
  const repoName = /^(http[s]?:\/\/[a-zA-Z0-9.\-_]+\/(.*))\/issues/.exec(item.web_url)[2];
  const avatarUrl = item.assignee && item.assignee.avatar_url;

  return (
    <div className="list-item">
      <a target="_blank" href={webUrl}>
        <CardBody>
          <div className="list-item-wrapper">
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
          { item.labels.length > 0 &&
            item.labels.map(label =>
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

ListItem.propTypes = propTypes;

export default ListItem;
