import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMService } from 'src/config/database/typeORM.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.example',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeORMService
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
