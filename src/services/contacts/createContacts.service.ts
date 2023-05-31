import { AppDataSource } from '../../data-source';
import { Contact, User } from '../../entities';
import { AppError } from '../../error';
import { iContact, iContactsRepo, iCreateContacts, iUserRepo } from '../../interfaces';

const createContactService = async (contactData: iCreateContacts, userId: string): Promise<iContact> => {
  const contactRepository: iContactsRepo = AppDataSource.getRepository(Contact);
  const userRepository: iUserRepo = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const contacts: Contact = contactRepository.create({ ...contactData, user });
  await contactRepository.save(contacts);

  return contacts;
};

export { createContactService };