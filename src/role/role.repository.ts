import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {FindManyOptions, In, Repository} from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {
    // @ts-ignore
    super();
  }

  async findByIds(roleIds: number[]): Promise<Role[]> {
    return this.roleRepository.find({ where: { id: In(roleIds) } });
  }

  async find(options?: FindManyOptions<Role>): Promise<Role[]> {
    return this.roleRepository.find(options);
  }
}
