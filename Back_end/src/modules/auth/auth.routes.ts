import { Router } from 'express';
import { register, login, getMe, updateProfile, refresh } from './auth.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { LoginSchema, RegisterSchema, UpdateProfileSchema, RefreshSchema } from './auth.schema';
import { limitadorAcessoLogin, limitadorCriacaoConta } from '../../config/limitador-requisicoes.config';

const authRouter = Router();

authRouter.post('/register', limitadorCriacaoConta, validate(RegisterSchema), register);
authRouter.post('/login', limitadorAcessoLogin, validate(LoginSchema), login);
authRouter.post('/refresh', validate(RefreshSchema), refresh);
authRouter.get('/me', authenticate, getMe);
authRouter.put('/me', authenticate, validate(UpdateProfileSchema), updateProfile);

export { authRouter };
