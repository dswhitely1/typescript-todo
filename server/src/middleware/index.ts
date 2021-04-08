import {
  handleBodyParsing,
  handleCompression,
  handleCors,
  handleHelmet,
  handlePassport,
} from './common';

export * from './restricted';
export * from './validate';

export default [
  handleHelmet,
  handleBodyParsing,
  handleCors,
  handleCompression,
  handlePassport,
];
