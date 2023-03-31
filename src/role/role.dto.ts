import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;
}
