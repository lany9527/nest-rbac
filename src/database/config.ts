import { TypeOrmModule } from '@nestjs/typeorm';

export const config:TypeOrmModule  = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'Aa123456*',
  database: 'nestjs',
}


