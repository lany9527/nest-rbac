import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateUserDto, UpdateUserDto } from './role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private userRepository: Repository<Role>,
  ) {}

  async create(dto: CreateUserDto): Promise<Role> {
    let role = new Role();
    role = {...role, ...dto}
    return this.userRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    const options = { where: { id } };
    return this.userRepository.findOne(options);
  }

  async update(id: number, dto: UpdateUserDto): Promise<Role> {
    const options = { where: { id } };
    let role = await this.userRepository.findOne(options);
    if (role) {
      role = {...role, ...dto}
      return this.userRepository.save(role);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
