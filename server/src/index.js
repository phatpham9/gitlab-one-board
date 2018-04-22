require('dotenv').config();

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');
const { NOT_FOUND } = require('http-status-codes');

const issuesRoute = require('./issues');
const { sendNotFound } = require('./utils/http-error');
const { fetchIssues } = require('./utils/gitlab-api');

// Constants
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

app.use(expressValidator());
app.use(bodyParser.json());

app.use('/api', [
  issuesRoute,
]);

const notFoundError = (req, res) => res.status(NOT_FOUND).json(sendNotFound());

// Index request return the React app, so it can handle routing.
app.get('/', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.all('*', notFoundError);


app.listen(PORT, HOST, async () => {
  // fetch issues for the first time
  await fetchIssues();
});

console.log(`Running on http://${HOST}:${PORT}`); // eslint-disable-line no-console
