import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { iUserRepo, iUserUpdate, iUser } from '../../interfaces';
import { userReturnSchema } from '../../schemas';

const updateUserService = async (newUserData: iUserUpdate, idUser: string): Promise<iUser> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOneBy({
    id: idUser,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await userRepository.save(user);

  const updatedUser = userReturnSchema.parse(user);

  return updatedUser;
};

export { updateUserService };
