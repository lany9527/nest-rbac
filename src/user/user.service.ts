import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import { User } from './user.entity';
import { Role } from '../role/role.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import {RoleRepository} from "../role/role.repository";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, roles } = createUserDto;
    const user = new User();
    user.name = name;
    user.email = email;
    if (roles) {
      user.roles = await this.roleRepository.find({ where: { id: In(roles) } });
    }
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['roles'] });
  }

  async findOne(id: string): Promise<User> {
    // @ts-ignore
    const user = await this.userRepository.findOne(id, { relations: ['roles'] });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const { name, email, roles } = updateUserDto;
    const user = await this.findOne(id);
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (roles) {
      user.roles = await this.roleRepository.find({ where: { id: In(roles) } });
    }
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
