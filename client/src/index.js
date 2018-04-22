import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const rootElem = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootElem,
);

if (module.hot) {
    module.hot.accept('./App', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('./App').default;
        ReactDOM.render(
            <NextApp />,
            rootElem,
        );
    });
}

registerServiceWorker();
