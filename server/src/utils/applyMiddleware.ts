import { Router } from 'express';

type MiddlewareWrapper = (router: Router) => void;

export const applyMiddleware = (
  middleware: MiddlewareWrapper[],
  router: Router,
) => {
  for (const f of middleware) {
    f(router);
  }
};
