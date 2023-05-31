import { Router } from 'express';
import { ensureDataIsValidMiddleware, ensureTokenIsValidMiddleware } from '../middlewares';
import { createUserController, getOwnerUserController, getUsersController } from '../controllers';
import { userSchema } from '../schemas';
import { ensureEmailIsExitsMiddleware } from '../middlewares/ensureEmailExists.middleware';

const userRouter: Router = Router();

userRouter.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsExitsMiddleware, createUserController);
userRouter.get('', ensureTokenIsValidMiddleware, getUsersController);
userRouter.get('/owner', ensureTokenIsValidMiddleware, getOwnerUserController);

export { userRouter };
