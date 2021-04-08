import { Route } from '../../utils';
import { validate } from '../../middleware/validate';
import {
  login,
  loginValidation,
  register,
  registerValidation,
} from '../../controller/auth';

export const authRoutes: Route[] = [
  {
    path: '/auth/register',
    method: 'post',
    handler: [registerValidation, validate, register],
  },
  {
    path: '/auth/login',
    method: 'get',
    handler: [loginValidation, validate, login],
  },
];
