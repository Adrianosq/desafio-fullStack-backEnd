import { getRounds, hashSync } from 'bcryptjs';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { Contact } from './contacts.entities';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name_complet: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ length: 25 })
  phone: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contact?: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
