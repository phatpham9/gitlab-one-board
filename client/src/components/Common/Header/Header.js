import React from 'react';
import { connect } from 'react-redux';

import { setCurrentView, currentViewSelectors } from '../../../state/ducks/current-view';

import { APP } from "../../../config";

import './Header.scss';

const views = [{
  value: 'board',
  title: 'Board',
}, {
  value: 'list',
  title: 'List',
}];

const Header = props => (
  <header className="header clearfix">
    <div className="float-left">
      <img className="logo" src="./logo.png" alt="" />
      <span className="brand-name">{APP.name}</span>
    </div>
    <div className="float-right controls">
      {views.map(({ value, title }, index) => (
        <a key={index} className={`view ${props.currentView === value ? 'active' : ''}`} onClick={() => props.setCurrentView(value)}>{title}</a>
      ))}
    </div>
  </header>
);

export default connect(state => ({
  currentView: currentViewSelectors.getCurrentView(state),
}), {
  setCurrentView,
})(Header);
