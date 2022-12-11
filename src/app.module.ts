import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment/environment-config.module';
import { TypeOrmConfigModule } from './infra/database/typeorm/typeOrmConfigModule';
import { UserModule } from './infra/IoC/user.module';

@Module({
  imports: [TypeOrmConfigModule, EnvironmentConfigModule, UserModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
