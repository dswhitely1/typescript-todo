import { header, query, ValidationChain } from 'express-validator';

export const deleteTasksValidation: ValidationChain[] = [
  header('authorization')
    .exists()
    .withMessage('Authorization Header is missing'),
  query('id').exists().withMessage('id query is required'),
];
