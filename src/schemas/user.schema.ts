import { z } from 'zod';
import { contactReturnSchema } from './contacts.schema';

const userSchema = z.object({
  name_complet: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
});

const userReturnSchema = userSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  contact: contactReturnSchema.array().nullish()
});

const userReturnWhitoutPassword: any = userReturnSchema.omit({ password: true });

const userReturnManySchema = userReturnWhitoutPassword.array();

export { userSchema, userReturnSchema, userReturnWhitoutPassword, userReturnManySchema };
