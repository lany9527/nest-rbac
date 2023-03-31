import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    let user = new User();
    user = {...user, ...dto}
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const options = { where: { id } };
    return this.userRepository.findOneBy({id});
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const options = { where: { id } };
    // let user = await this.userRepository.findOne(options);
    let user = await this.userRepository.findOneBy({id});
    if (user) {
      user = {...user, ...dto}
      return this.userRepository.save(user);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
