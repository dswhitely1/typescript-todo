import { json, Router, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import passport from 'passport';
import { restricted } from './restricted';

export const handleHelmet = (router: Router) => router.use(helmet());

export const handleBodyParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }));
  router.use(json());
};

export const handleCors = (router: Router) => router.use(cors());

export const handleCompression = (router: Router) => router.use(compression());

export const handlePassport = (router: Router) => {
  passport.use(restricted);
  router.use(passport.initialize());
};
