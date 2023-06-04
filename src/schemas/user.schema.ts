import { z } from 'zod';
import { contactManySchema } from './contacts.schema';

const userSchema = z.object({
  name_complet: z.string().min(3).max(45),
  email: z.string().email().min(3).max(45),
  phone: z.string().min(8),
  password: z.string().min(4).max(20)
})

const userReturnSchema = userSchema
  .extend({
      id: z.string(),
      createdAt: z.string(),
      contact: contactManySchema
  })
  .omit({ password: true })

const userUpdateSchema = userSchema.partial()
const userReturnManySchema = userReturnSchema.array()

export { userSchema, userReturnSchema, userReturnManySchema, userUpdateSchema };
