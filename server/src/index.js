require('dotenv').config();

const Express = require('express');
const ExpressValidator = require('express-validator');
const BodyParser = require('body-parser');
const Path = require('path');
const Logger = require('morgan');
const Mongoose = require('mongoose');
const Passport = require('passport');
const ConnectMongo = require('connect-mongo');
const ExpressSession = require('express-session');
const { NOT_FOUND } = require('http-status-codes');

const issuesRoute = require('./issues');
const usersRoute = require('./users');
const projectsRoute = require('./projects');
const labelsRoute = require('./labels');
const { sendNotFound } = require('./utils/http-error');
const { fetchIssues, fetchUsers, fetchProjects } = require('./utils/gitlab-api');

// Constants
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const CLIENT_BUILD_PATH = Path.join(__dirname, '../../client/build');

// App
const app = Express();

// Mongoose config
Mongoose.Promise = global.Promise;

// Connect mongo
const mongoUrl = `${process.env.MONGO_URL}?reconnectTries=10&reconnectInterval=3000`;

Mongoose.connect(mongoUrl);
Mongoose.connection.on('open', () => {
  // Static files
  app.use(Express.static(CLIENT_BUILD_PATH));

  app.use(Logger('combined'));
  app.use(ExpressValidator());
  app.use(BodyParser.json());


  // Session
  app.use(ExpressSession({
    name: process.env.APP_NAME,
    secret: process.env.SESSION_SECRET,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      maxAge: 86400000,
    },
    resave: false,
    saveUninitialized: true,
    rolling: true,
    store: new (ConnectMongo(ExpressSession))({
      mongooseConnection: Mongoose.connection,
    }),
  }));

  // Use passport
  app.use(Passport.initialize());
  app.use(Passport.session());

  // for authentication
  app.use(require('./auth'));

  app.use('/api', [
    // authRoute,
    issuesRoute,
    usersRoute,
    projectsRoute,
    labelsRoute,
  ]);

  const notFoundError = (req, res) => res.status(NOT_FOUND).json(sendNotFound());

  // Index request return the React app, so it can handle routing.
  app.get('/', (request, response) => {
    response.sendFile(Path.join(CLIENT_BUILD_PATH, 'index.html'));
  });

  app.all('*', notFoundError);

  app.listen(PORT, HOST, async () => {
    // fetch issues, users, projects for the first time
    await Promise.all(fetchIssues(), fetchUsers(), fetchProjects());
  });

  console.log(`Running on http://${HOST}:${PORT}`); // eslint-disable-line no-console
});

// Mongoose connection error handler
Mongoose.connection.on('error', (err) => {
  console.log('Mongoose failed to connect', err);      // eslint-disable-line no-console
  Mongoose.disconnect();
});

// Mongoose connection close handler
Mongoose.connection.on('close', () => {
  console.log('Mongoose connection closed');                      // eslint-disable-line no-console
});

module.exports = app; // for testing
