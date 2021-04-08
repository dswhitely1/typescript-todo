import { header, param, ValidationChain } from 'express-validator';

export const updateTaskValidation: ValidationChain[] = [
  header('authorization')
    .exists()
    .withMessage('Authorization Header is missing'),
  param('id').exists().withMessage('id is required'),
];
