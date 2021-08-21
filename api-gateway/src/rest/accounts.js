import request from 'request';
import config from 'config';

const url = config.get('accounts.url');

const requestWrapper = options =>
  new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return reject(err || res.body);
      }
      return resolve(body.data);
    });
  });

/*
 * rest calls to accounts microservice
 */
export default {
  // create geth account.
  createAccount(password) {
    const options = {
      url: `${url}/createAccount`,
      method: 'POST',
      json: true,
      body: { password },
    };
    return requestWrapper(options);
  },

  // unlock a geth account.
  unlockAccount(body) {
    const options = {
      url: `${url}/unlockAccount`,
      method: 'POST',
      json: true,
      body,
    };
    return requestWrapper(options);
  },

  // get Coinbase address.
  getCoinbase() {
    const options = {
      url: `${url}/getCoinbase`,
      method: 'GET',
      json: true,
    };
    return requestWrapper(options);
  },
};
