import { Request, Response } from 'express';
import { decodeHeader, generateToken } from '../../utils';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const [username, password] = decodeHeader(<string>req.headers.authorization);
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid username and/or password' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res
        .status(401)
        .json({ message: 'Invalid username and/or password' });
    }
    const token = generateToken(user);
    res.json({ token, message: `Welcome back ${user.username}!` });
  } catch (error) {
    res.status(500).json(error);
  } finally {
    await prisma.$disconnect();
  }
};
