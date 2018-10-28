import fs from 'fs';
import url from 'url';
import path from 'path';
import {promisify} from 'util';
import {NextFunction, Request, Response} from 'express';
import { formatTime } from '../utils/time';
import { logServerActivity } from '../utils/helpers';

const readFileAsync = promisify(fs.readFile);

const HELLO_MSG = '<h3>Hello! Please go to <br/>'
  + '<a href="/status">/status</a><br/><a href="/api/events">/api/events</a></h3>';
const PATH_TO_FILE = path.join(__dirname, '/hostedFiles/events.json');

export const sayHello = (req: Request, res: Response) => {
  res.send(HELLO_MSG);
};

export const sendUptime = (req: Request, res: Response) => {
  const uptime = Math.round(process.uptime());

  res.send(formatTime(uptime));
};

export const sendFileHandler = (req: Request, res: Response, next: NextFunction) => {
  const type: string = req.query.type;
  const supportedTypes = ['info', 'critical'];
  let types: string[] = [];

  if (type) {
    types = type.split(':');
    const illegalType = types.find((el) => !supportedTypes.includes(el));

    if (illegalType !== undefined) {
      const msg = `Wrong type: ${type}. Expected type ${supportedTypes.join(' or ')}`;

      logServerActivity(400, msg);

      return res.status(400).json({
        error: `Wrong type: ${type}. Expected type ${supportedTypes.join(' or ')}`,
      });
    }
  }

  readFileAsync(PATH_TO_FILE, {encoding: 'utf8'})
    .then((data) => {
      let parsed: {events: Array<{type: string}>};

      try {
        parsed = JSON.parse(data);
      } catch (err) {
        next(err);
        return;
      }

      if (types.length) {
        parsed.events = parsed.events.filter((el) => types.includes(el.type));
      }

      res.json(parsed);
    })
    .catch((err) => next(err));
};
