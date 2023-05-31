import { z } from 'zod';
import { LoginSchema } from '../schemas';

type iLogin = z.infer<typeof LoginSchema>;

export { iLogin };
