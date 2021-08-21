import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import accounts from './routes/accounts';
import logger from './logger';
import { formatResponse, formatError, errorHandler } from './middlewares';

const app = express();

// cors & body parser middleware should come before any routes are handled
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', accounts);

app.use(formatResponse);

app.use((err, req, res, next) => {
  logger.error(
    `${req.method}:${req.url}
    ${JSON.stringify({ error: err.message })}
    ${JSON.stringify({ errorStack: err.stack.split('\n') }, null, 1)}
    ${JSON.stringify({ body: req.body })}
    ${JSON.stringify({ params: req.params })}
    ${JSON.stringify({ query: req.query })}
  `,
  );
  next(err);
});

app.use(formatError);
app.use(errorHandler);

export default app;
