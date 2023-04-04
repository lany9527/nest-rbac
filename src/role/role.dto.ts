import { IsString, IsOptional } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({
    description: '权限名',
  })
  @IsString()
  name: string;
}

export class UpdateRoleDto {
  @ApiProperty({
    description: '权限名',
  })
  @IsString()
  @IsOptional()
  name?: string;
}
