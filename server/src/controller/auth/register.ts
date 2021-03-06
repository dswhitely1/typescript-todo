import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import prisma from '../../store';
import { generateToken } from '../../utils';

export const register = async (req: Request, res: Response) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const { username, password } = req.body;
  try {
    const newUser = await prisma.user.create({ data: { username, password } });
    const token = generateToken(newUser);
    res.status(201).json({ token, message: `Welcome ${newUser.username}!` });
  } catch (error) {
    res.status(500).json(error);
  }
};
