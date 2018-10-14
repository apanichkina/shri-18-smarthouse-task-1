const fs = require('fs');
const url = require('url');
const { formatTime } = require('../utils/time');
const { sendFile } = require('./file');
const { logServerActivity } = require('../utils/helpers');

const HELLO_MSG = '<h3>Hello! Please go to <br/>' +
  '<a href="/status">/status</a><br/><a href="/api/events">/api/events</a></h3>';
const PATH_TO_FILE = __dirname + '/hostedFiles/events.json';

module.exports.sayHello = (req, res) => {
  res.send(HELLO_MSG)
};

module.exports.sendUptime = (req, res) => {
  const uptime = Math.round(process.uptime());

  res.send(formatTime(uptime))
};

module.exports.sendFile = (req, res) => {
  const url_parts = url.parse(req.url, true);
  const { query: { type } } = url_parts;
  const supportedTypes = ['info', 'critical'];
  let types = [];

  if (type) {
    types = type.split(':');
    const illegalType = types.find((el) => !supportedTypes.includes(el));

    if (illegalType !== undefined) {
      const msg = `Wrong type: <b>${type}</b>. Expected type ${supportedTypes.join(' or ')}`;

      logServerActivity(400, msg);
      res.status(400).send({
        error: 'WRONG_TYPE',
        msg: `Wrong type: ${type}. Expected type ${supportedTypes.join(' or ')}`
      })
    }
  }

  res.setHeader('Content-Type','application/json; charset=utf-8');

  const stream = fs.createReadStream(PATH_TO_FILE, {encoding: 'utf8'});
  sendFile(stream, res, PATH_TO_FILE, types)
};
