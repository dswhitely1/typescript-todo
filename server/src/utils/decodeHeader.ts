export const decodeHeader = (authorization: string) => {
  return Buffer.from(authorization.split(' ')[1], 'base64')
    .toString('ascii')
    .split(':');
};
