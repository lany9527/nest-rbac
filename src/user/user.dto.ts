import { IsString, IsEmail, IsOptional } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '密码',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: '邮箱',
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({
    description: '手机',
  })
  @IsEmail()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: '用户绑定的角色id数组',
  })
  @IsOptional()
  roles?: string[];
}

export class UpdateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: '密码',
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: '邮箱',
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: '手机',
  })
  @IsEmail()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: '用户绑定的角色id数组',
  })
  @IsOptional()
  roles?: string[];
}
