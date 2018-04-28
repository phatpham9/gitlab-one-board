import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';
import { getIssues } from './state/ducks/issues';
import { getProjects } from './state/ducks/projects';
import { getLabels } from './state/ducks/labels';
import { getAuthors } from './state/ducks/authors';
import { getAssignees } from './state/ducks/assignees';

import Header from './components/Common/Header';
import Content from './components/Common/Content';
import Footer from './components/Common/Footer';

import './App.scss';

const store = configureStore(window.REDUX_INITIAL_DATA);

store.dispatch(getIssues());
store.dispatch(getProjects());
store.dispatch(getLabels());
store.dispatch(getAuthors());
store.dispatch(getAssignees());

const App = () => (
  <ReduxProvider store={store}>
    <div className="app">
      <Header />

      <Content />

      <Footer />
    </div>
  </ReduxProvider>
);

export default App;
