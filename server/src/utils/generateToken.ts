import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateToken = (user: Partial<User>) => {
  const {
    JWT_SECRET = `Shh, I'm a secret`,
    JWT_EXPIRES_IN = '1d',
  } = process.env;
  const payload = { sub: user.id, username: user.username };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
