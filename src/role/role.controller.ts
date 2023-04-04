import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';
import { Role } from './role.entity';
import {ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({
    tags: [],
    description: '新建角色',
  })
  @ApiParam({ name: 'name', type: CreateRoleDto })
  @ApiResponse({ status: 200, description: '成功'})
  @HttpCode(200)
  @Post('/create')
  async create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(dto);
  }

  @ApiOperation({
    tags: [],
    description: '角色列表',
  })
  @ApiOkResponse({ description: '成功' })
  @HttpCode(200)
  @Get('/list')
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @ApiOperation({
    tags: [],
    description: '角色详情',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '角色id', required: true })
  @HttpCode(200)
  @Get('/detail')
  async findOne(@Param('id') id: string): Promise<Role> {
    return this.roleService.findOne(id);
  }

  @ApiOperation({
    tags: [],
    description: '编辑角色',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '角色id', required: true })
  @HttpCode(200)
  @Put('/update')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateRoleDto,
  ): Promise<Role> {
    return this.roleService.update(id, dto);
  }

  @ApiOperation({
    tags: [],
    description: '删除角色',
  })
  @ApiOkResponse({ description: '成功' })
  @ApiQuery({ name: 'id', description: '角色id', required: true })
  @HttpCode(200)
  @Delete('/delete')
  async delete(@Param('id') id: string): Promise<void> {
    return this.roleService.delete(id);
  }
}
