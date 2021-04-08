import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';

export const getTasks = async (
  req: Request & { user: Pick<User, 'id' | 'username'> },
  res: Response,
) => {
  const userId = req.user.id;
  const prisma = new PrismaClient();
  try {
    const tasks = await prisma.task.findMany({ where: { userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    await prisma.$disconnect();
  }
};
