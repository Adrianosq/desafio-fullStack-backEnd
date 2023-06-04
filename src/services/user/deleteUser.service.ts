import { iUserRepo } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';

const deleteUserService = async (idUser: string): Promise<void> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: idUser });

  await userRepository.remove(user!);
};

export { deleteUserService };
