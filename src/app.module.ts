import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { config } from './database/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./user/user.module";
import { User } from "./user/user.entity";
import { Role } from "./role/role.entity";
import {RoleModule} from "./role/role.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Aa123456*',
    database: 'nestjs',
    synchronize: true,
    autoLoadEntities: true,
    // entities: [User, Role],
  }), UserModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
