import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './routes';

const server = express();
applyMiddleware(middleware, server);
applyRoutes(routes, server);
export default server;
