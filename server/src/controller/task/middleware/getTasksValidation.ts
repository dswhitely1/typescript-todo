import { header, ValidationChain } from 'express-validator';

export const getTasksValidation: ValidationChain[] = [
  header('authorization')
    .exists()
    .withMessage('Authorization Header is required'),
];
