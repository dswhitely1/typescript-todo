import { authRoutes } from './auth';
import { taskRoutes } from './task';

export default [...authRoutes, ...taskRoutes];
