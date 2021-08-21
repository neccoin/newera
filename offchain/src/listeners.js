import apiGateway from './rest/api-gateway';
import logger from './logger';

async function insertNFTToDb(data, { jwtToken }) {
  logger.debug('offchain/src/listeners.js', 'insertNFTToDb', 'data', data);

  await apiGateway.insertNFTToDb({ authorization: jwtToken }, data);
}

async function insertFTTransactionToDb(data, { jwtToken }) {
  logger.debug('offchain/src/listeners.js', 'insertFTTransactionToDb', 'data', data);

  await apiGateway.insertFTTransactionToDb({ authorization: jwtToken }, data);
}

async function insertNFTCommitmentToDb(data, { jwtToken }) {
  logger.debug('offchain/src/listeners.js', 'insertNFTCommitmentToDb', 'data', data);

  const { blockNumber, outputCommitments } = data;
  const [{ tokenId, salt, owner, commitment, commitmentIndex }] = outputCommitments;

  const correctnessChecks = await apiGateway.checkCorrectnessForNFTCommitment(
    {
      authorization: jwtToken,
    },
    {
      tokenId,
      publicKey: owner.publicKey,
      salt,
      commitment,
      commitmentIndex,
      blockNumber,
    },
  );

  logger.debug(
    'offchain/src/listeners.js',
    'insertNFTCommitmentToDb',
    'correctnessChecks',
    correctnessChecks,
  );

  const { zCorrect, zOnchainCorrect } = correctnessChecks.data;

  await apiGateway.insertNFTCommitmentToDb(
    { authorization: jwtToken },
    { ...data, zCorrect, zOnchainCorrect },
  );
}

async function insertFTCommitmentToDb(data, { jwtToken }) {
  logger.debug('offchain/src/listeners.js', 'insertFTCommitmentToDb', 'data', data);

  const { blockNumber, outputCommitments } = data;
  const [{ value, salt, owner, commitment, commitmentIndex }] = outputCommitments;

  const correctnessChecks = await apiGateway.checkCorrectnessForFTCommitment(
    {
      authorization: jwtToken,
    },
    {
      value,
      salt,
      publicKey: owner.publicKey,
      commitment,
      commitmentIndex,
      blockNumber,
    },
  );

  logger.debug(
    'offchain/src/listeners.js',
    'insertFTCommitmentToDb',
    'correctnessChecks',
    correctnessChecks,
  );

  const { zCorrect, zOnchainCorrect } = correctnessChecks.data;

  await apiGateway.insertFTCommitmentToDb(
    { authorization: jwtToken },
    { ...data, zCorrect, zOnchainCorrect },
  );
}

function listeners(data, userData) {
  logger.debug('offchain/src/listeners.js', 'listeners', 'data', data, 'userData', userData);

  const actualPayload = data.payload;
  switch (actualPayload.for) {
    case 'FTCommitment':
      return insertFTCommitmentToDb(actualPayload, userData);
    case 'NFTCommitment':
      return insertNFTCommitmentToDb(actualPayload, userData);
    case 'NFTToken':
      return insertNFTToDb(actualPayload, userData);
    case 'FToken':
      return insertFTTransactionToDb(actualPayload, userData);
    default:
      throw Error('payload.for is invalid');
  }
}

export default listeners;
