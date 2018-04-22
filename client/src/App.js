import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';
// import { getIssues } from './state/ducks/issues';

import Header from './components/Common/Header';
import Content from './components/Common/Content';
import Footer from './components/Common/Footer';
import Board from './components/Board';

import './App.scss';

const store = configureStore(window.REDUX_INITIAL_DATA);

// Promise.all([
//   store.dispatch(getIssues()),
// ]);

const App = props => (
    <ReduxProvider store={store}>
      <div className="app">
        <Header />
        <Content>
          <Board />
        </Content>
        <Footer />
      </div>
    </ReduxProvider>
);

export default App;
