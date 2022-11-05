import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from "typeorm";

import { TeamEntity } from './team.entity';

@Entity('User')
@Unique(['email'])
export class UserEntity {
  //@PrimaryColumn()
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ length: 30, comment: '이름' })
  name: string;

  @Column({ length: 30, comment: '이메일' })
  email: string;

  @Column({ default: 0, comment: '나이' })
  age: number;

  @ManyToOne(
    (type) => TeamEntity,
    (team) => team.user
  )
  @JoinColumn({ name: 'team_idx' })
  team: TeamEntity;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;

  @Column({ length: 60 })
  signupVerifyToken: string;
}