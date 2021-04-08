import { RequestWithUser } from '../../utils';
import { Response } from 'express';
import { PrismaClient } from '@prisma/client';

export const updateTask = async (req: RequestWithUser, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const prisma = new PrismaClient();
  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { ...req.body },
    });
    res.status(202).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    await prisma.$disconnect();
  }
};
