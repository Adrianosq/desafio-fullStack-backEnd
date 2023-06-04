import { Router } from 'express';
import { ensureDataIsValidMiddleware, ensureTokenIsValidMiddleware } from '../middlewares';
import { createUserController, deleteUserController, getOwnerUserController, getUsersController, updateUserController } from '../controllers';
import { userSchema, userUpdateSchema } from '../schemas';
import { ensureEmailIsExitsMiddleware } from '../middlewares/ensureEmailExists.middleware';

const userRouter: Router = Router();

userRouter.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailIsExitsMiddleware, createUserController);
userRouter.get('', ensureTokenIsValidMiddleware, getUsersController);
userRouter.get('/owner', ensureTokenIsValidMiddleware, getOwnerUserController);
userRouter.patch('', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), updateUserController)
userRouter.delete('', ensureTokenIsValidMiddleware, deleteUserController)

export { userRouter };
