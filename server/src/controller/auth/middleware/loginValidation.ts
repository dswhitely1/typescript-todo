import { header, ValidationChain } from 'express-validator';

export const loginValidation: ValidationChain[] = [
  header('authorization')
    .exists()
    .withMessage('Authorization Header is missing'),
];
