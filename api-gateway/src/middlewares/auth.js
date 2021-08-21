import jwt from 'jsonwebtoken';
import { encryptPassword, decryptPassword } from './password';

const noAuthRoutes = ['/login', '/createAccount'];
const JWT_SECRET = 'secret';

export function createToken(data, password) {
  const jwtData = { ...data, password: encryptPassword(password) };

  // delete all secret info user info before creating jwt token.
  delete jwtData.secretKey;
  delete jwtData.shhIdentity;

  return jwt.sign(jwtData, JWT_SECRET);
}

export function authentication(req, res, next) {
  if (noAuthRoutes.includes(req.path)) return next();

  const token = req.headers.authorization;
  if (token) {
    try {
      return jwt.verify(token, JWT_SECRET, function callback(err, decoded) {
        if (err) {
          return next(err);
        }
        req.user = {};
        req.user.address = decoded.address;
        req.user.name = decoded.name;
        req.user.publicKey = decoded.publicKey;

        // decrypting password for unlocking account
        req.user.password = decryptPassword(decoded.password);
        return next();
      });
    } catch (error) {
      return next(error);
    }
  }
  const error = new Error('No Token Provided');
  error.status = 499;
  return next(error);
}
