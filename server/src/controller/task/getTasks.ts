import { Request, Response } from 'express';
import { User } from '@prisma/client';
import prisma from '../../store';

export const getTasks = async (
  req: Request & { user: Pick<User, 'id' | 'username'> },
  res: Response,
) => {
  const userId = req.user.id;
  try {
    const tasks = await prisma.task.findMany({ where: { userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};
