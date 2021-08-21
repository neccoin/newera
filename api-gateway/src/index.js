/** **************************************************************************
*                      index.js
* This is the rest API for the Authentication  microservice, which provides
* Authentication and AUthorisation from  the Blockchain

**************************************************************************** */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './logger';
import rabbitmq from './rabbitmq';
import {
  rootRouter,
  nftCommitmentRoutes,
  ftCommitmentRoutes,
  ftRoutes,
  nftRoutes,
  userRoutes,
  shieldRoutes,
} from './routes';
import { authentication, formatResponse, formatError, errorHandler } from './middlewares';
import setupAdmin from './setup-admin-user';

const app = express();

// set up a filter to parse JSON
app.use(bodyParser.json());

// cross origin filter
app.use(cors());
app.use(authentication);

app.use(rootRouter);
app.use(nftCommitmentRoutes);
app.use(ftCommitmentRoutes);
app.use(ftRoutes);
app.use(nftRoutes);
app.use(userRoutes);
app.use(shieldRoutes);

app.use(formatResponse);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    logger.error(
      `${req.method}:${req.url}
      ${JSON.stringify({ error: err.message })}
      ${JSON.stringify({ errorStack: err.stack.split('\n') }, null, 1)}
      ${JSON.stringify({ body: req.body })}
      ${JSON.stringify({ params: req.params })}
      ${JSON.stringify({ query: req.query })}
    `,
    );
  }
  next(err);
});

app.use(formatError);
app.use(errorHandler);

// handle unhandled promise rejects
process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at:', p, 'reason:', reason);
});

const server = app.listen(80, '0.0.0.0', async () => {
  setTimeout(() => rabbitmq.connect(), 10000);
  await setupAdmin();
  logger.info('API-Gateway API server running on port 80');
});

server.setTimeout(120 * 60 * 1000);
