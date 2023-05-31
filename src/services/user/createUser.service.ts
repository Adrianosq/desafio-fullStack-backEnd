import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { iCreateUser, iUserRepo, iUserWhitoutPassword } from '../../interfaces';
import { userReturnWhitoutPassword } from '../../schemas';

const createUserService = async (userData: iCreateUser): Promise<iUserWhitoutPassword> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);
  await userRepository.save(user);

  const newUser = userReturnWhitoutPassword.parse(user);

  return newUser;
};

export { createUserService };