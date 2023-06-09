import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entities';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name_complet: string;

  @Column({ length: 45 })
  email: string;

  @Column({length: 25})
  phone: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contact, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;
}

export { Contact };
