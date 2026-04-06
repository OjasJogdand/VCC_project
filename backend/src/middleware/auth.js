import jwt from 'jsonwebtoken';
import { getRequiredEnv } from '../config/env.js';

function authenticate(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Missing or invalid authorization token' });
  }

  try {
    req.user = jwt.verify(token, getRequiredEnv('JWT_SECRET'));
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token is invalid or expired' });
  }
}

export { authenticate };
