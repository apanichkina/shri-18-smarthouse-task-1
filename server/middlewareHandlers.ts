import {Response, Request, NextFunction} from 'express';
import { logServerActivity } from '../utils/helpers';

export const pageNotFound = (req: Request, res: Response, next: NextFunction) => {
  logServerActivity(404, `on ${req.url}`);
  res.type('text/html').status(404).send('<h1>Page not found</h1>');
};

export const serverError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logServerActivity(500, `on ${req.url}\n stackTrace: ${err.stack}`);
  res.status(500).json({error: err.message});
};
