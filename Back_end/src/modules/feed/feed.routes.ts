import { Router } from 'express';
import { listarFeed } from './feed.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';

const feedRouter = Router({ mergeParams: true });

feedRouter.get('/', authenticate, listarFeed);

export { feedRouter };
