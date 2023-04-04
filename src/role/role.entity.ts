import {Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {User} from "../user/user.entity";

@Entity()
export class Role {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  constructor() {
    this.id = uuidv4();
  }
}
