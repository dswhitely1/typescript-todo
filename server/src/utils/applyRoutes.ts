import { ValidationChain } from 'express-validator';
import { NextFunction, Request, Response, Router } from 'express';
import { User } from '@prisma/client';

export interface RequestWithUser extends Request {
  user: Pick<User, 'id' | 'username'>;
}
type RouteHandler = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => Promise<void> | void | Promise<Response | undefined> | Response;

type Handler = ValidationChain[] | RouteHandler;

export type Route = {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
  routes.forEach(({ method, path, handler }) =>
    (router as any)[method](path, handler),
  );
};
