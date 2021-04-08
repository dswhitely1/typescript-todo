import { RequestWithUser } from '../../utils';
import { Response } from 'express';
import prisma from '../../store';

export const deleteTasks = async (req: RequestWithUser, res: Response) => {
  const ids = req.query.id;
  let tasksToDelete: number[] = [];
  if (typeof ids === 'string') {
    tasksToDelete = ids.split(',').map((id) => parseInt(id, 10));
  }
  if (tasksToDelete.length === 0) {
    return res.status(400).json({ message: 'No Tasks to delete' });
  }
  try {
    const response = await prisma.task.deleteMany({
      where: {
        id: {
          in: tasksToDelete,
        },
      },
    });
    res.status(204).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
