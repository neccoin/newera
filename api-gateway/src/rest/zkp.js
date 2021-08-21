import request from 'request';
import config from 'config';

const url = config.get('zkp.url');

const requestWrapper = options =>
  new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return reject(err || res.body.error);
      }
      return resolve(body.data);
    });
  });

/*
 * rest calls to zkp microservice
 */
export default {
  // load new vk
  loadVks(body, headers) {
    const options = {
      url: `${url}/vk`,
      method: 'POST',
      json: true,
      headers,
      body,
    };
    return requestWrapper(options);
  },

  // mint non-fungible token commitment
  mintToken({ address }, body) {
    const options = {
      url: `${url}/mintNFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // transfer non-fungible token commitment
  spendToken({ address }, body) {
    const options = {
      url: `${url}/transferNFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // burn non-fungible token commitment
  burnToken({ address }, body) {
    const options = {
      url: `${url}/burnNFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // mint fungible token commitment
  mintFTCommitment({ address }, body) {
    const options = {
      url: `${url}/mintFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // transfer fungible token commitment
  transferFTCommitment({ address }, body) {
    const options = {
      url: `${url}/transferFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // burn fungible token commitment
  burnFTCommitment({ address }, body) {
    const options = {
      url: `${url}/burnFTCommitment`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // consolidation transfer fungible token commitment
  consolidationTransfer({ address }, body) {
    const options = {
      url: `${url}/consolidationTransfer`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // mint non-fungible token
  mintNFToken({ address }, body) {
    const options = {
      url: `${url}/mintNFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // transfer non-fungible token
  transferNFToken({ address }, body) {
    const options = {
      url: `${url}/transferNFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // burn non-fungible token
  burnNFToken({ address }, body) {
    const options = {
      url: `${url}/burnNFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // get non-fungible token address
  getNFTokenAddress({ address }) {
    const options = {
      url: `${url}/getNFTokenContractAddress`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // get non-fungible token information
  getNFTokenInfo({ address }) {
    const options = {
      url: `${url}/getNFTokenInfo`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // mint fungible token
  mintFToken({ address }, body) {
    const options = {
      url: `${url}/mintFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // transfer fungible token
  transferFToken({ address }, body) {
    const options = {
      url: `${url}/transferFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // burn fungible token
  burnFToken({ address }, body) {
    const options = {
      url: `${url}/burnFToken`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // get fungible token address
  getFTokenAddress({ address }) {
    const options = {
      url: `${url}/getFTokenContractAddress`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // get fungible token information
  getFTokenInfo({ address }) {
    const options = {
      url: `${url}/getFTokenInfo`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // check correctness for non-fungible token commitment once received by whisper listener of bob.
  checkCorrectnessForNFTCommitment(headers, body) {
    const options = {
      url: `${url}/checkCorrectnessForNFTCommitment`,
      method: 'POST',
      json: true,
      headers,
      body,
    };
    return requestWrapper(options);
  },

  // check correctness for fungible token commitment once received by whisper listener of bob.
  checkCorrectnessForFTCommitment(headers, body) {
    const options = {
      url: `${url}/checkCorrectnessForFTCommitment`,
      method: 'POST',
      json: true,
      headers,
      body,
    };
    return requestWrapper(options);
  },

  // set new non-fungible commitment token shield for user address
  setTokenShield({ address }, body) {
    const options = {
      url: `${url}/setNFTCommitmentShieldContractAddress`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // get non-fungible commitment token shield address for user address
  getNFTCommitmentShield({ address }) {
    const options = {
      url: `${url}/getNFTCommitmentShieldContractAddress`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // remove non-fungible commitment token shield address for user address
  unSetTokenShield({ address }) {
    const options = {
      url: `${url}/removeNFTCommitmentshield`,
      method: 'DELETE',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },
  // set new fungible commitment token shield for user address
  setFTCommitmentShield({ address }, body) {
    const options = {
      url: `${url}/setFTokenShieldContractAddress`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // get fungible commitment token shield contract address for user address
  getFTCommitmentShield({ address }) {
    const options = {
      url: `${url}/getFTokenShieldContractAddress`,
      method: 'GET',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // remove fungible commitment token shield address for user address
  unSetFTCommitmentShield({ address }) {
    const options = {
      url: `${url}/removeFTCommitmentshield`,
      method: 'DELETE',
      json: true,
      headers: { address },
    };
    return requestWrapper(options);
  },

  // bulk transfer fungible token commitment
  simpleFTCommitmentBatchTransfer({ address }, body) {
    const options = {
      url: `${url}/simpleFTCommitmentBatchTransfer`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // blacklist an acoount address.
  setAddressToBlacklist({ address }, body) {
    const options = {
      url: `${url}/setAddressToBlacklist`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // remove account address from blacklist.
  unsetAddressFromBlacklist({ address }, body) {
    const options = {
      url: `${url}/unsetAddressFromBlacklist`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },

  // get decode transaction from transaction hash
  getAndDecodeTransaction({ address }, body) {
    const options = {
      url: `${url}/decodeTransaction`,
      method: 'POST',
      json: true,
      headers: { address },
      body,
    };
    return requestWrapper(options);
  },
};
