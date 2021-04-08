import { body, check, ValidationChain } from 'express-validator';
import prisma from '../../../store';

export const registerValidation: ValidationChain[] = [
  body('username').exists().withMessage('username is required'),
  body('password').exists().withMessage('password is required'),
  body('confirmPassword').exists().withMessage('confirmPassword is required'),
  check('username').custom(async (username) => {
    const user = await prisma.user.findFirst({ where: { username } });
    if (user) {
      return Promise.reject('Username is already taken');
    }
  }),
  check('password').custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      throw new Error('Passwords must match');
    }
    return Promise.resolve();
  }),
];
