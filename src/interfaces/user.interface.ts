import { z } from 'zod';
import { userReturnManySchema, userReturnSchema, userSchema } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../entities';

type iUserCreate = z.infer<typeof userSchema>;
type iUser = z.infer<typeof userReturnSchema>;
type iUserUpdate = DeepPartial<iUserCreate>;
type iUserMany = z.infer<typeof userReturnManySchema>;
type iUserRepo = Repository<User>;

export { iUserCreate, iUser, iUserMany, iUserRepo, iUserUpdate };
