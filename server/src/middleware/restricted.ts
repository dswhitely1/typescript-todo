import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import prisma from '../store';

const { JWT_SECRET = `Shh, I'm a secret` } = process.env;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

export const restricted = new JwtStrategy(options, (jwt_payload, done) => {
  prisma.user
    .findUnique({
      where: { id: jwt_payload.sub },
      select: { id: true, username: true },
    })
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((error) => done(error, false));
});
