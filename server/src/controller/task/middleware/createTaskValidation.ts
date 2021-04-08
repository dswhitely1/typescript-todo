import { body, header, ValidationChain } from 'express-validator';

export const createTaskValidation: ValidationChain[] = [
  header('authorization')
    .exists()
    .withMessage('Authorization Header is missing'),
  body('title').exists().withMessage('title is required'),
  body('description').exists().withMessage('description is required'),
];
