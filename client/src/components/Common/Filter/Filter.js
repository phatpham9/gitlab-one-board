import React, {Component} from 'react';
import { connect } from 'react-redux';
import { projectsSelectors } from '../../../state/ducks/projects';
import { labelsSelectors } from '../../../state/ducks/labels';
import { authorsSelectors } from '../../../state/ducks/authors';
import { assigneesSelectors } from '../../../state/ducks/assignees';
import { setCurrentFilter, setDefaultFilter, filtersSelectors } from '../../../state/ducks/filters';
import Select from '../Select';

import './Filter.scss';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.props.setCurrentFilter({
      name,
      value
    });
  }
  
  render() {
    return(
      <div className="select-filter">
        <a className="clear-all" onClick={() => this.props.setDefaultFilter()}>
          Clear all
        </a>
        <Select
          value={this.props.currentFilter.project}
          displayName={'name'}
          name={'project'}
          title={'Project..'}
          options={this.props.projects}
          onChange={this.onChange}
        />
        <Select
          value={this.props.currentFilter.label}
          name={'label'}
          title={'Label..'}
          options={this.props.labels}
          onChange={this.onChange}
        />
        <Select
          value={this.props.currentFilter.author}
          displayName={'name'}
          name={'author'}
          title={'Author..'}
          options={this.props.authors}
          onChange={this.onChange}
        />
        <Select
          value={this.props.currentFilter.assignee}
          displayName={'name'}
          name={'assignee'}
          title={'Assignee..'}
          options={this.props.assignees}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default connect(state => ({
  projects: projectsSelectors.getProjects(state),
  labels: labelsSelectors.getLabels(state),
  authors: authorsSelectors.getAuthors(state),
  assignees: assigneesSelectors.getAssignees(state),
  currentFilter: filtersSelectors.getCurrentFilter(state),
}), {
  setCurrentFilter,
  setDefaultFilter,
})(Filter);
