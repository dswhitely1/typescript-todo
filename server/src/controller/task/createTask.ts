import { RequestWithUser } from '../../utils';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';

export const createTask = async (req: RequestWithUser, res: Response) => {
  const prisma = new PrismaClient();
  try {
    const newTask = await prisma.task.create({
      data: { ...req.body, userId: req.user.id },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    await prisma.$disconnect();
  }
};
