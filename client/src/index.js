import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
