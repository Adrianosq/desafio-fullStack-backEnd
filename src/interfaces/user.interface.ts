import { z } from 'zod';
import { userReturnManySchema, userReturnSchema, userReturnWhitoutPassword, userSchema } from '../schemas';
import { Repository } from 'typeorm';
import { User } from '../entities';

type iCreateUser = z.infer<typeof userSchema>;
type iUser = z.infer<typeof userReturnSchema>;
type iUserWhitoutPassword = z.infer<typeof userReturnWhitoutPassword>;
type iUserMany = z.infer<typeof userReturnManySchema>;
type iUserRepo = Repository<User>;

export { iCreateUser, iUser, iUserMany, iUserRepo, iUserWhitoutPassword };
