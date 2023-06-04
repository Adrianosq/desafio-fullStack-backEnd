import { Request, Response } from 'express';
import {
  createContactService,
  deleteContactsService,
  getContactService,
  updateContactService,
} from '../services/contacts';

const createContactsController = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.userId;

  const contact = await createContactService(req.body, userId);

  return res.status(200).json(contact);
};

const getContactsController = async (req: Request, res: Response): Promise<Response> => {
  const users = await getContactService();

  return res.json(users);
};

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactId = req.params.id;

  const updateContact = await updateContactService(req.body, contactId);

  return res.status(200).json(updateContact);
};

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactId = req.params.id;
 
  await deleteContactsService(contactId);

  return res.status(204).send();
};

export { createContactsController, getContactsController, updateContactController, deleteContactController };
