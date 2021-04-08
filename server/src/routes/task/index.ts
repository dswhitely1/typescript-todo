import { Route } from '../../utils';
import {
  createTask,
  createTaskValidation,
  deleteTasks,
  deleteTasksValidation,
  getTasks,
  getTasksValidation,
  updateTask,
  updateTaskValidation,
} from '../../controller';
import { validate } from '../../middleware';
import passport from 'passport';

export const taskRoutes: Route[] = [
  {
    path: '/tasks',
    method: 'get',
    handler: [
      getTasksValidation,
      validate,
      passport.authenticate('jwt', { session: false }),
      getTasks,
    ],
  },
  {
    path: '/tasks',
    method: 'post',
    handler: [
      createTaskValidation,
      validate,
      passport.authenticate('jwt', { session: false }),
      createTask,
    ],
  },
  {
    path: '/tasks/:id',
    method: 'put',
    handler: [
      updateTaskValidation,
      validate,
      passport.authenticate('jwt', { session: false }),
      updateTask,
    ],
  },
  {
    path: '/tasks',
    method: 'delete',
    handler: [
      deleteTasksValidation,
      validate,
      passport.authenticate('jwt', { session: false }),
      deleteTasks,
    ],
  },
];
