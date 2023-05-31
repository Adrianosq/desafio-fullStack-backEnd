import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { iUserMany, iUserRepo } from '../../interfaces';
import { userReturnManySchema, userReturnWhitoutPassword } from '../../schemas';

const getUserServices = async (): Promise<iUserMany> => {
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const findUser: Array<User> = await userRepository.find({
    relations:{
      contact: true
    }
  });
  // const users = userReturnManySchema.parse(findUser);

  return findUser;
};

export { getUserServices };