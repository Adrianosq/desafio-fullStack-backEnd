import { iContactsRepo } from '../../interfaces';
import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities';

const deleteContactsService = async (idContact: string): Promise<void> => {
  const contactRepository: iContactsRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: idContact });

  await contactRepository.remove(contact!);
};

export { deleteContactsService };
