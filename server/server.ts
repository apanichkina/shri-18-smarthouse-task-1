import express from 'express';
const app = express();

import { sayHello, sendUptime, sendFileHandler } from './routeHandlers';
import { pageNotFound, serverError } from './middlewareHandlers';

const PORT = 8000;

app.set('json spaces', 40);
// routes
app.get('/', sayHello);

app.get('/status', sendUptime);

app.get('/api/events', sendFileHandler);

app.use(pageNotFound);

app.use(serverError);

// listen
app.listen(PORT, (err: Error) => {
  if (err) {
    return console.log('something bad happened: ', err);
  }

  console.log(`Smart House server listening on port ${PORT}!`);
});
