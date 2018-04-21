const { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status-codes');

const sendServerError = error => ({
  code: INTERNAL_SERVER_ERROR,
  message: error && error.message ? error.message : 'Internal server error',
  error: process.env.NODE_ENV !== 'production' ? error : undefined,
});

const sendNotFound = error => ({
  code: NOT_FOUND,
  message: error && error.message ? error.message : 'Not found',
  error: process.env.NODE_ENV !== 'production' ? error : undefined,
});

const sendBadRequestError = error => ({
  code: BAD_REQUEST,
  message: error && error.message ? error.message : 'Bad request',
  error: process.env.NODE_ENV !== 'production' ? error : undefined,
});

const errorValidation = (validationErrors, error) => ({
  code: BAD_REQUEST,
  message: error && error.message ? error.message : 'Bad request',
  validationErrors,
  error: process.env.NODE_ENV !== 'production' ? error : undefined,
});

module.exports = {
  sendServerError,
  sendNotFound,
  sendBadRequestError,
  errorValidation,
};
