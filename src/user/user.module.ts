/*
https://docs.nestjs.com/modules
*/

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import {RoleModule} from "../role/role.module";
import {UserRepository} from "./user.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserRepository]),
    RoleModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
