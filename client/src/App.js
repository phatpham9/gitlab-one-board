import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './state';

import Header from './components/Common/Header';
import Content from './components/Common/Content';
import Footer from './components/Common/Footer';

import './App.scss';

const store = configureStore(window.REDUX_INITIAL_DATA);

const App = props => (
  <ReduxProvider store={store}>
    <div className="app">
      <Header />

      <Content />

      <Footer />
    </div>
  </ReduxProvider>
);

export default App;
