import { Router } from 'express';
import { ensureDataIsValidMiddleware, ensureTokenIsValidMiddleware } from '../middlewares';
import {
  createContactsController,
  deleteContactController,
  getContactsController,
  updateContactController,
} from '../controllers';
import { contactSchema, contactUpdateSchema } from '../schemas';

const contactsRouter: Router = Router();

contactsRouter.use(ensureTokenIsValidMiddleware);

contactsRouter.post('', ensureDataIsValidMiddleware(contactSchema), createContactsController);
contactsRouter.get('', getContactsController);
contactsRouter.patch('/:id', ensureDataIsValidMiddleware(contactUpdateSchema), updateContactController);
contactsRouter.delete('/:id', deleteContactController);

export { contactsRouter };
