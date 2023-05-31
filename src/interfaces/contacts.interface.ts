import { z } from 'zod';
import { contactManySchema, contactReturnSchema, contactSchema } from '../schemas';
import { Repository } from 'typeorm';
import { Contact } from '../entities';

type iCreateContacts = z.infer<typeof contactSchema>;
type iContact = z.infer<typeof contactReturnSchema>;
type iContactsMany = z.infer<typeof contactManySchema>;
type iContactsRepo = Repository<Contact>;

export { iCreateContacts, iContact, iContactsMany, iContactsRepo };
