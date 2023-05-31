import { Request, Response } from 'express';
import { createContactService } from '../services/contacts/createContacts.service';

const createContactsController = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.userId

  const contact = await createContactService(req.body, userId);

  return res.status(200).json(contact);
};

export { createContactsController };