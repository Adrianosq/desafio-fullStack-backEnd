import { z } from 'zod';
import { userReturnWhitoutPassword } from './user.schema';

const contactSchema = z.object({
  name_complet: z.string(),
  email: z.string().email(),
  phone: z.string()
});

const contactReturnSchema = contactSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  userId: userReturnWhitoutPassword
})

const contactManySchema = contactReturnSchema.array()

export { contactSchema, contactReturnSchema, contactManySchema };
