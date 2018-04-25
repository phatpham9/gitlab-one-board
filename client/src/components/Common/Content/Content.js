import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '../../Board';
import List from '../../List';

import { currentViewSelectors } from '../../../state/ducks/current-view';

import './Content.scss';

const propTypes = {
  currentView: PropTypes.any.isRequired,
};

const Content = ({ currentView }) => (
  <div className="content">
    {currentView === 'board' ? <Board /> : <List />}
  </div>
);

Content.propTypes = propTypes;

export default connect(state => ({
  currentView: currentViewSelectors.getCurrentView(state),
}))(Content);
