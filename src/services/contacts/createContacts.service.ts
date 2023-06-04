import { AppDataSource } from '../../data-source';
import { Contact, User } from '../../entities';
import { AppError } from '../../error';
import { iContact, iContactsRepo, iContactCreate, iUserRepo } from '../../interfaces';
import { contactReturnSchema } from '../../schemas';

const createContactService = async (contactData: iContactCreate, userId: string): Promise<iContact> => {
  const contactRepository: iContactsRepo = AppDataSource.getRepository(Contact);
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const contacts: Contact = contactRepository.create({ ...contactData, user });
  await contactRepository.save(contacts);

  const contact = contactReturnSchema.parse(contacts)

  return contact;
};

export { createContactService };
