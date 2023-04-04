import {Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import {Role} from "../role/role.entity";
@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @ManyToMany(() => Role, { cascade: true })
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
  roles: Role[];

  constructor() {
    this.id = uuidv4();
  }
}
