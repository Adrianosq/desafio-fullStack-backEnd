import { Router } from 'express';
import { createLoginController } from '../controllers';
import { ensureDataIsValidMiddleware } from '../middlewares';
import { LoginSchema } from '../schemas';

const loginRouter: Router = Router();

loginRouter.post('', ensureDataIsValidMiddleware(LoginSchema), createLoginController);

export { loginRouter };
