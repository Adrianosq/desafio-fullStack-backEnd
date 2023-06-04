import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities';
import { iContactsRepo, iContactUpdate, iContact } from '../../interfaces';
import { contactReturnSchema } from '../../schemas';

const updateContactService = async (newContactData: iContactUpdate, idContact: string): Promise<iContact> => {
  const contactRepository: iContactsRepo = AppDataSource.getRepository(Contact);

  const oldContactData = await contactRepository.findOneBy({
    id: idContact,
  });

  const user = contactRepository.create({
    ...oldContactData,
    ...newContactData,
  });

  await contactRepository.save(user);

  const updatedContact = contactReturnSchema.parse(user);

  return updatedContact;
};

export { updateContactService };
