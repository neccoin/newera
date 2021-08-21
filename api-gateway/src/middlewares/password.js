import crypto from 'crypto';

const CRYPT_SECRET = 'secret';

export function encryptPassword(password) {
  const cipher = crypto.createCipher('aes-128-cbc', CRYPT_SECRET);
  let crypted = cipher.update(password, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

export function decryptPassword(passwordHash) {
  const decipher = crypto.createDecipher('aes-128-cbc', CRYPT_SECRET);
  let decrpted = decipher.update(passwordHash, 'hex', 'utf8');
  decrpted += decipher.final('utf8');
  return decrpted;
}
