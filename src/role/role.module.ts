/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import {RoleRepository} from "./role.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService, RoleRepository], // <-- 这里需要导出 RoleRepository
  exports: [RoleService, RoleRepository],
})
export class RoleModule {}

