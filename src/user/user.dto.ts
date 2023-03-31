import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsEmail()
  @IsOptional()
  phone?: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsEmail()
  @IsOptional()
  phone?: string;
}
