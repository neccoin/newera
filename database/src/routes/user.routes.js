import { UserService, BlacklistService } from '../business';

/**
 * This function will create or get mongo db connection
 * req.body = {
 *  name: 'a',
 *  password: 'a',
 * }
 * @param {*} req
 * @param {*} res
 */
async function configureDBconnection(req, res, next) {
  const { name, password } = req.body;
  try {
    req.user.db = await UserService.createDBconnection(name, password);
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * This function will create a user(public ethereum account)
 * req.body = {
 *  name: 'a',
 *  email: 'a',
 *  address: '0xE237b19f7a9f2E92018a68f4fB07C451F578fa26' => Ethereum account
 * }
 * @param {*} req
 * @param {*} res
 */
async function createUser(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    res.data = await userService.createUser(req.body);
    next();
  } catch (err) {
    next(err);
  }
}

/* This function is used to fetch user.
 * @param {*} req
 * @param {*} res
 */
async function getUser(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    res.data = await userService.getUser();
    next();
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    await userService.updateUser(req.body);
    res.data = { message: 'user informantion updated' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * This function is used to insert newly private account for a user
 * req.body = {
 *  address: '0x256140f466b2e56E3ae0055551591FE46664976d', // this is the newly created private account
 *  password: '1535612512928', // and password used to create private account
 * }
 * req.headers.address = '0xE237b19f7a9f2E92018a68f4fB07C451F578fa26' // this is user public account
 * @param {*} req
 * @param {*} res
 */
async function insertPrivateAccountHandler(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    res.data = await userService.insertPrivateAccountHandler(req.body);
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to add ERC-20 Contract related information in user table, such as contract addresses,
 * account address to which user hold ERC-20 token and password of that account address used to unlock account.
 * req.body = {
 *  contractName,
 *  contractAddress,
 *  isSelected,
 * }
 * @param {*} req
 * @param {*} res
 */
async function addFTShieldContractInfo(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    await userService.addFTShieldContractInfo(req.body);
    res.data = { message: 'Contract Information Inserted' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to update ERC-20 Contract related information in user table, such as contract addresses,
 * account address to which user hold ERC-20 token and password of that account address used to unlock account.
 * req.body = {
 *  contractName - name of coinShield contract
 *  contractAddress - address of coinShield contract
 *  isSelected - set/unset conteract as selected contract
 *  isFTShieldPreviousSelected - current state of contract; is selected one or not
 * }
 * @param {*} req
 * @param {*} res
 */
async function updateFTShieldContractInfoByContractAddress(req, res, next) {
  const { address } = req.params;
  const userService = new UserService(req.user.db);
  try {
    await userService.updateFTShieldContractInfoByContractAddress(address, req.body);
    res.data = { message: 'Contract Information Updated' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to remove ERC-20 contract related information from user table
 * req.query = {
 *  contractAddress
 * }
 * @param {*} req
 * @param {*} res
 */
async function deleteFTShieldContractInfoByContractAddress(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    const status = await userService.deleteFTShieldContractInfoByContractAddress(
      req.params.address,
    );
    res.data = { message: 'Contract Information Removed', status };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to add ERC-721 contract related information in user table, such as contract addresses,
 * account address to which user hold ERC-721 token and password of that account address used to unlock account.
 * req.body = {
 *  contractName,
 *  contractAddress,
 *  isSelected,
 * }
 * @param {*} req
 * @param {*} res
 */
async function addNFTShieldContractInfo(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    await userService.addNFTShieldContractInfo(req.body);
    res.data = { message: 'Contract Information Inserted' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to update ERC-721 Contract related information in user table, such as contract addresses,
 * account address to which user hold ERC-721 token and password of that account address used to unlock account.
 * req.body = {
 *  contractName - name of coinShield contract
 *  contractAddress - address of coinShield contract
 *  isSelected - set/unset conteract as selected contract
 *  isNFTShieldPreviousSelected - current state of contract; is selected one or not
 * }
 * @param {*} req
 * @param {*} res
 */
async function updateNFTShieldContractInfoByContractAddress(req, res, next) {
  const { address } = req.params;
  const userService = new UserService(req.user.db);
  try {
    await userService.updateNFTShieldContractInfoByContractAddress(address, req.body);
    res.data = { message: 'Contract Information Updated' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to remove ERC-721 contract related information from user table
 * req.query = {
 *  contractAddress
 * }
 * @param {*} req
 * @param {*} res
 */
async function deleteNFTShieldContractInfoByContractAddress(req, res, next) {
  const userService = new UserService(req.user.db);
  try {
    const status = await userService.deleteNFTShieldContractInfoByContractAddress(
      req.params.address,
    );
    res.data = { message: 'Contract Information Removed', status };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to get blacklist users
 * @param {*} req
 * @param {*} res
 */
async function getBlacklistedUsers(req, res, next) {
  const blacklistService = new BlacklistService(req.user.db);
  try {
    const data = (await blacklistService.getBlacklistedUsers())[0];
    res.data = data ? data.users : [];
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to add a user to the blacklist
 * req.body = {
 *  blacklist :  {
 *   name,
 *   address,
 *  }
 * }
 * @param {*} req
 * @param {*} res
 */
async function setUserToBlacklist(req, res, next) {
  const blacklistService = new BlacklistService(req.user.db);
  try {
    await blacklistService.setUserToBlacklist(req.body.blacklist);
    res.data = { message: 'added to blacklist' };
    next();
  } catch (err) {
    next(err);
  }
}

/**
 * this function is used to remove a user from the blacklist
 * req.body = {
 *  unBlacklist :  {
 *   name,
 *   address,
 *  }
 * }
 * @param {*} req
 * @param {*} res
 */
async function unsetUserFromBlacklist(req, res, next) {
  const blacklistService = new BlacklistService(req.user.db);
  try {
    await blacklistService.unsetUserFromBlacklist(req.body.unBlacklist);
    res.data = { message: 'removed from blacklist' };
    next();
  } catch (err) {
    next(err);
  }
}

export default function(router) {
  router.post('/db-connection', configureDBconnection, getUser);

  router.post('/users', createUser);

  router
    .route('/users/:name')
    .get(getUser)
    .patch(updateUser);

  router.post('/users/:name/private-accounts', insertPrivateAccountHandler);

  router.post('/users/:name/ft-shield-contracts', addFTShieldContractInfo);

  router
    .route('/users/:name/ft-shield-contracts/:address')
    .put(updateFTShieldContractInfoByContractAddress)
    .delete(deleteFTShieldContractInfoByContractAddress);

  router.post('/users/:name/nft-shield-contracts', addNFTShieldContractInfo);

  router
    .route('/users/:name/nft-shield-contracts/:address')
    .put(updateNFTShieldContractInfoByContractAddress)
    .delete(deleteNFTShieldContractInfoByContractAddress);

  // blacklist
  router
    .route('/blacklist/users')
    .get(getBlacklistedUsers)
    .patch(setUserToBlacklist)
    .delete(unsetUserFromBlacklist);
}
