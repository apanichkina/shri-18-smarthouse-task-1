const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

const { formatTime } = require('./time');
const { sendFile } = require('./file');
const { logServerActivity } = require('./helpers');

const PORT = 8000;
const PATH_TO_FILE = __dirname + '/hostedFiles/events.json';

// routes
app.get('/', (req, res) => {
  const HELLO_MSG = '<h3>Hello! Please go to <br/>' +
    '<a href="/status">/status</a><br/><a href="/api/events">/api/events</a></h3>';

  res.send(HELLO_MSG)
});

app.get('/status', (req, res) => {
  const uptime = Math.round(process.uptime());

  res.send(formatTime(uptime))
});

app.get('/api/events', (req, res) => {
  const url_parts = url.parse(req.url, true);
  const { query: { type } } = url_parts;
  const supportedTypes = ['info', 'critical'];

  if (type && !supportedTypes.includes(type)) {
    const msg = `Wrong type: <b>${type}</b>. Expected type ${supportedTypes.join(' or ')}`;

    logServerActivity(400, msg);
    res.status(400).send(msg)
  }

  res.setHeader('Content-Type','application/json; charset=utf-8');

  const stream = fs.createReadStream(PATH_TO_FILE, {encoding: 'utf8'});
  sendFile(stream, res, PATH_TO_FILE, type)
});

app.use(function (req, res, next) {
  logServerActivity(404, `on ${req.url}`);
  res.status(404).send('<h1>Page not found</h1>')
});

// listen
app.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened: ', err);
  }

  console.log(`Example app listening on port ${PORT}!`)
});
