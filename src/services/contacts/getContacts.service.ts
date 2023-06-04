import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities';
import { iContactsMany, iContactsRepo } from '../../interfaces';
import { contactManySchema } from '../../schemas';

const getContactService = async (): Promise<iContactsMany> => {
  const contactRepository: iContactsRepo = AppDataSource.getRepository(Contact);

  const findContact: Array<Contact> = await contactRepository.find({
    relations:{
      user: true
    }
  });
  const contacts = contactManySchema.parse(findContact);

  return contacts;
};

export { getContactService };