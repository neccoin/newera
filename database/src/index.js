import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import logger from './logger';
import { dbConnection, formatResponse, formatError, errorHandler } from './middlewares';
import configureRoutesToPraseParams, {
  initializeNftRoutes,
  initializeNftCommitmentRoutes,
  initializeFtRoutes,
  initializeFtCommitmentRoutes,
  initializeUserRoutes,
} from './routes';

const app = express();
const router = Router();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

configureRoutesToPraseParams(app);

app.use(dbConnection);
app.use(router);

initializeNftRoutes(router);
initializeNftCommitmentRoutes(router);
initializeFtRoutes(router);
initializeFtCommitmentRoutes(router);
initializeUserRoutes(router);

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

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at:', p, 'reason:', reason);
});

app.use(formatError);
app.use(errorHandler);

const server = app.listen(80, '0.0.0.0', () =>
  logger.info('zkp database RESTful API server started on ::: 80'),
);
server.timeout = 0;
