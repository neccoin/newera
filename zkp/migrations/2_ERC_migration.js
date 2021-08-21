const FToken = artifacts.require('FToken.sol');
const NFTokenMetadata = artifacts.require('NFTokenMetadata.sol');

module.exports = function(deployer) {
  deployer.then(async () => {
    await deployer.deploy(NFTokenMetadata);

    await deployer.deploy(FToken);
  });
};
