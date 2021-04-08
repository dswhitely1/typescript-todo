import { RequestWithUser } from '../../utils';
import prisma from '../../store';
import { Response } from 'express';

export const createTask = async (req: RequestWithUser, res: Response) => {
  try {
    const newTask = await prisma.task.create({
      data: { ...req.body, userId: req.user.id },
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json(error);
  }
};
