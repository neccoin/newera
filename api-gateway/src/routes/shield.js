import express from 'express';
import { getShieldAddresses } from '../services/shield';

const router = express.Router();

/**
 * @api {get} /shield/address get Default shield addresses for both ERC-20 and ERC-721
 * @apiVersion 1.0.0
 * @apiName  get Default shield contract addresses.
 * @apiGroup Sheild Contract
 *
 *
 * @apiExample {js} Example usage:
 *
 * $http.get(url, data)
 *   .success((res, status) => doSomethingHere())
 *   .error((err, status) => doSomethingHere());
 *
 * @apiSuccess (Success 200) {Object} data Default Set Contract Addresses.
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *     {
 *        "ftCommitmentShield": {
 *            "shieldAddress": "0x3880537A8D6E3c76ecF0e3dAe30D8bFfc72dde7d",
 *            "name": "EY OpsCoin"
 *        },
 *        "nftCommitmentShield": {
 *            "shieldAddress": "0xa44bb5cb4fAED858D7C8B90536831D9bc20f97F7",
 *            "name": "EYToken"
 *        }
 *    }
 */
router.get('/getShieldAddresses', getShieldAddresses);

export default router;
