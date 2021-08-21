import initializeNftRoutes from './nft.routes';
import initializeNftCommitmentRoutes from './nft-commitment.routes';
import initializeFtRoutes from './ft.routes';
import initializeFtCommitmentRoutes from './ft-commitment.routes';
import initializeUserRoutes from './user.routes';

function parseParams(req, res, next) {
  req.username = req.params.name;
  next();
}

export default function configureRoutesToPraseParams(app) {
  app.all('/users/:name', parseParams);
  app.all('/users/:name/private-accounts', parseParams);
  app.all('/users/:name/ft-shield-contracts', parseParams);
  app.all('/users/:name/nft-shield-contracts', parseParams);
  app.all('/users/:name/ft-shield-contracts/:address', parseParams);
  app.all('/users/:name/nft-shield-contracts/:address', parseParams);
}

export {
  initializeNftRoutes,
  initializeNftCommitmentRoutes,
  initializeFtRoutes,
  initializeFtCommitmentRoutes,
  initializeUserRoutes,
};
