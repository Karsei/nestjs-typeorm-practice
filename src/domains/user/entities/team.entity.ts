import {
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { UserEntity } from './user.entity';

@Entity('Team')
export class TeamEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ length: 30, comment: '이름' })
  name: string;

  @OneToMany(
    (type) => UserEntity,
    (user) => user.team
  )
  user: UserEntity[];

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;
}