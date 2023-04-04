import {
  Body,
  Controller,
  Delete,
  Get, HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";
import {CreateRoleDto} from "../role/role.dto";

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    tags: [],
    description: '新建用户',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiParam({ name: 'name', type: CreateUserDto })
  @HttpCode(200)
  @Post('/create')
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @ApiOperation({
    tags: [],
    description: '用户列表',
  })
  @ApiOkResponse({ description: '成功' })
  @HttpCode(200)
  @Get('/list')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({
    tags: [],
    description: '用户详情',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '用户id', required: true })
  @HttpCode(200)
  @Get('/detail')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({
    tags: [],
    description: '编辑用户',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '用户id', required: true })
  @HttpCode(200)
  @Put('/update')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, dto);
  }

  @ApiOperation({
    tags: [],
    description: '删除用户',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '用户id', required: true })
  @HttpCode(200)
  @Delete('/delete')
  async delete(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
