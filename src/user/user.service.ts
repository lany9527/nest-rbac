import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import {RoleRepository} from "../role/role.repository";
import {RoleService} from "../role/role.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,
    // ===
    private readonly roleService: RoleService, // 注入 RoleService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, password, phone, email, roles } = createUserDto;
    const user = new User();
    for (let key in createUserDto) {
      if (key === 'roles' && roles) {
        // user.roles = await this.roleRepository.find({ where: { id: In(roles) } });
        user.roles = await this.roleService.findByIds(roles);
      } else if (createUserDto[key]) {
        console.log('key',key)
        user[key] = createUserDto[key]
      }
    }
    // console.log('createUserDto ', createUserDto)
    // console.log('user ', user)
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ relations: ['roles'] });
  }

  async findOne(id: string): Promise<User> {
    console.log('findOne id ', id)
    if (!id) {
      throw new NotFoundException(`User id not found`);
      return
    }
    // @ts-ignore
    // const user = await this.userRepository.findOne({id}, { relations: ['roles'] });
    const user = await this.userRepository.findOne({ where: { id: id }, relations: ['roles'] });
    console.log('user ', user)
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(updateUserDto: UpdateUserDto): Promise<User> {
    console.log(updateUserDto)
    const { id, roles } = updateUserDto;
    const user = await this.findOne(id);
    for (let key in updateUserDto) {
      if (key === 'roles') {
        user.roles = await this.roleService.findByIds(roles);
      } else if (updateUserDto[key]) {
        user[key] = updateUserDto[key]
      }
    }
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    console.log('remove id ', id)
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
