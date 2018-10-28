const { logServerActivity } = require('../utils/helpers');

module.exports.pageNotFound = (req, res, next) => {
  logServerActivity(404, `on ${req.url}`);
  res.status(404).send('<h1>Page not found</h1>');
}
