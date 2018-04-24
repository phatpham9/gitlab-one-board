import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import Card from './Card';

import './List.scss';

const List = ({title, cards}) => (
  <Col className="list" md="3" sm="12">
    <div className={`panel panel-${title} panel-line`}>
        <div className="panel-heading">
          <h3 className="panel-title text-capitalize">{title}</h3>
          <span className="panel-count">{cards.length || 0}</span>
        </div>
        <div className="panel-body">
          {cards.length > 0 && cards.map((card, index) =>
            <Card key={index} card={card}/>
          )}
        </div>
    </div>
  </Col>
);

const propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired
};

List.propTypes = propTypes;

export default List;
