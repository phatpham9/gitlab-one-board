const { OK, BAD_REQUEST } = require('http-status-codes');

const list = (req, res) => {

  res.json([]);
};

module.exports = {
  list,
}
