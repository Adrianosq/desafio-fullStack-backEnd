import { Request, Response } from 'express';
import { createUserService, getOwnerUserService, getUserServices } from '../services/user';

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

const getUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users = await getUserServices();
  
  return res.json(users);
};

const getOwnerUserController = async(req: Request, res: Response): Promise<Response> =>{
  const userId = res.locals.userId

  const userById = await getOwnerUserService(userId)

  return res.json(userById)
}

export { createUserController, getUsersController, getOwnerUserController };
