import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(dto: CreateRoleDto): Promise<Role> {
    let role = new Role();
    role = {...role, ...dto}
    return this.roleRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    const options = { where: { id } };
    return this.roleRepository.findOne(options);
  }

  async update(id: string, dto: UpdateRoleDto): Promise<Role> {
    const options = { where: { id } };
    let role = await this.roleRepository.findOne(options);
    if (role) {
      role = {...role, ...dto}
      return this.roleRepository.save(role);
    }
    return null;
  }

  async delete(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }

  async findByIds(ids: string[]): Promise<Role[]> {
    const queryBuilder = this.roleRepository.createQueryBuilder('role');
    queryBuilder.where('role.id IN (:...ids)', { ids });
    const roles = await queryBuilder.getMany();
    return roles;
  }
}
