import { Router } from 'express';
import { analyzeObservation, saveObservation } from './health.controller';

const healthRouter = Router();
healthRouter.post('/observations/analyze', analyzeObservation);
healthRouter.post('/observations', saveObservation);

export { healthRouter };
