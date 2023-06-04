import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { iUserRepo } from '../../interfaces';
import { userReturnSchema } from '../../schemas';

const getOwnerUserService = async (idUser: string) => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { id: idUser },
    relations: {
      contact: true
    }
  });

  const returnUser = userReturnSchema.parse(user);

  return returnUser;
};

export { getOwnerUserService };
