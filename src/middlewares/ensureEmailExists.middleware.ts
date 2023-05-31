import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities';
import { AppError } from '../error';
import { iUserRepo } from '../interfaces';

const ensureEmailIsExitsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const FindEmail: User | null = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (FindEmail) {
    throw new AppError('Email already exists', 409);
  }
  next();
};

export { ensureEmailIsExitsMiddleware };
