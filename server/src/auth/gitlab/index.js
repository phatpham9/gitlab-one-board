const Router = require('express').Router;
const Passport = require('passport');
const GitlabStrategy = require('passport-gitlab2').Strategy;

const { passportGeneralCallback } = require('../utils');

const { GITLAB_BASE_URL, GITLAB_CLIENT_ID, GITLAB_SECRET,
      GITLAB_SCOPE, GITLAB_CALLBACK_URL } = process.env;

const gitlabAuth = Router();

gitlabAuth.get('/auth/gitlab', (req, res, next) => {
  Passport.use(new GitlabStrategy({
    baseURL: GITLAB_BASE_URL,
    clientID: GITLAB_CLIENT_ID,
    clientSecret: GITLAB_SECRET,
    scope: [GITLAB_SCOPE],
    callbackURL: GITLAB_CALLBACK_URL,
  }, passportGeneralCallback));

  Passport.authenticate('gitlab')(req, res, next);
});

// gitlab auth callback
gitlabAuth.get('/auth/gitlab/callback',
Passport.authenticate('gitlab', {
  failureRedirect: '/',
}), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/');
});

module.exports = gitlabAuth;