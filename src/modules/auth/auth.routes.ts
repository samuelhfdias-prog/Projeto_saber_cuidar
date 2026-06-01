import { Router } from 'express';
import { register, login, getMe, updateProfile } from './auth.controller';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { validate } from '../../shared/middlewares/validate.middleware';
import { LoginSchema, RegisterSchema, UpdateProfileSchema } from './auth.schema';

const authRouter = Router();

/** POST /api/auth/register — Público */
authRouter.post('/register', validate(RegisterSchema), register);

/** POST /api/auth/login — Público */
authRouter.post('/login', validate(LoginSchema), login);

/** GET /api/auth/me — Protegido */
authRouter.get('/me', authenticate, getMe);

/** PUT /api/auth/me — Protegido */
authRouter.put('/me', authenticate, validate(UpdateProfileSchema), updateProfile);

export { authRouter };
