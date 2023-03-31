import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateUserDto, UpdateUserDto } from './role.dto';
import { Role } from './role.entity';

@Controller('users')
export class RoleController {
  constructor(private readonly userService: RoleService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<Role> {
    return this.userService.create(dto);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Role> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<Role> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
