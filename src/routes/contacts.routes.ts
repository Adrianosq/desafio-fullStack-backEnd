import { Router } from 'express';
import { ensureDataIsValidMiddleware, ensureTokenIsValidMiddleware } from '../middlewares';
import { createContactsController, } from '../controllers';
import { contactSchema } from '../schemas';

const contactsRouter: Router = Router();

contactsRouter.use(ensureTokenIsValidMiddleware)

contactsRouter.post('', ensureDataIsValidMiddleware(contactSchema), createContactsController);

export { contactsRouter};
