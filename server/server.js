const express = require('express');
const app = express();

const { sayHello, sendUptime, sendFile } = require('./routeHandlers');
const { pageNotFound } = require('./middlewareHandlers');

const PORT = 8000;

app.set('json spaces', 40);
// routes
app.get('/', sayHello);

app.get('/status', sendUptime);

app.get('/api/events', sendFile);

app.use(pageNotFound);

// listen
app.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened: ', err);
  }

  console.log(`Smart House server listening on port ${PORT}!`)
});
