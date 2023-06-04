import { z } from 'zod';
import { contactManySchema, contactReturnSchema, contactSchema } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';
import { Contact } from '../entities';

type iContactCreate = z.infer<typeof contactSchema>;
type iContact = z.infer<typeof contactReturnSchema>;
type iContactUpdate = DeepPartial<iContactCreate>;
type iContactsMany = z.infer<typeof contactManySchema>;
type iContactsRepo = Repository<Contact>;

export { iContactCreate, iContact, iContactsMany, iContactsRepo, iContactUpdate };
