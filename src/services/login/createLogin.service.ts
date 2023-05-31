import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../error';
import { iLogin } from '../../interfaces';
import 'dotenv/config';
import { Repository } from 'typeorm';

const createLoginService = async (loginData: iLogin): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email
  });

  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError('Invalid credentials', 401);
  }

  const token: string = jwt.sign(
    {
      user: user.name_complet,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn:  process.env.EXPIRES_IN,
      subject: user.id,
    }
  );

  return token;
};

export { createLoginService };
