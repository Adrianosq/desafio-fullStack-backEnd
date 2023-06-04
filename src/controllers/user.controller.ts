import { Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  getOwnerUserService,
  getUserServices,
  updateUserService,
} from '../services/user';

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

const getUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users = await getUserServices();

  return res.json(users);
};

const getOwnerUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.userId;

  const userById = await getOwnerUserService(userId);

  return res.json(userById);
};

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.userId;

  const updatedUser = await updateUserService(req.body, userId);

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.userId;

  await deleteUserService(userId);

  return res.status(204).send();
};
export { createUserController, getUsersController, getOwnerUserController, updateUserController, deleteUserController };
