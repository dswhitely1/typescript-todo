import { RequestWithUser } from '../../utils';
import { Response } from 'express';
import prisma from '../../store';

export const updateTask = async (req: RequestWithUser, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { ...req.body },
    });
    res.status(202).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};
