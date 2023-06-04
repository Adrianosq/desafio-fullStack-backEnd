import { z } from 'zod';

export { contactSchema, contactReturnSchema, contactManySchema, contactUpdateSchema };

const contactSchema = z.object({
  name_complet: z.string().min(3).max(45),
  email: z.string().email().min(3).max(45),
  phone: z.string().min(8),
})

const contactReturnSchema = contactSchema.extend({
  id: z.string(),
  createdAt: z.string()
})

const contactUpdateSchema = contactSchema.partial()
const contactManySchema = contactReturnSchema.array()