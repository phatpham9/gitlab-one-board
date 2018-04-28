const Router = require('express').Router;
const Passport = require('passport');
const { FORBIDDEN } = require('http-status-codes');

const { User } = require('../models');

const { AUTH_GITLAB_ENABLE } = process.env;
const authRouter = Router();

// serialize and deserialize
Passport.serializeUser((user, cb) => cb(null, user.id));

Passport.deserializeUser(async (id, cb) => {
  try {
    const query = {
      _id: id,
    };
    const user = await User.get(query);

    return cb(null, user);
  } catch (err) {
    return cb(err, null);
  }
});

if (AUTH_GITLAB_ENABLE) authRouter.use(require('./gitlab'));

// logout
authRouter.get('/logout', (req, res) => {
  req.logout();

  res.json({
    message: 'Done',
  });
});

// me
authRouter.get('/me', async (req, res) => {
  if (req.isAuthenticated()) {
    const query = {
      _id: req.user.id,
    };
    const user = await User.get(query);

    res.json(user);
  } else {
    res.send(FORBIDDEN, {
      message: 'Forbidden',
    });
  }
});

module.exports = authRouter;
