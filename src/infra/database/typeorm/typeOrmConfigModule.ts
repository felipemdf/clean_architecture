import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "src/infra/config/environment/config";
import { UserRepository } from "./repository/user.repository";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": config().database.host,
            "port": config().database.port,
            "username": config().database.user,
            "password": config().database.password,
            "database": config().database.database,
            "entities": ["dist/infra/database/typeorm/entities/*.js"], //dist/infra/database/typeorm/entities/*.js //dist/**/*.entity{.ts,.js}
            "synchronize": true,
            "autoLoadEntities": true
        }),
        TypeOrmModule.forFeature()
    ],
    providers: [UserRepository],
    exports: [UserRepository]

})
export class TypeOrmConfigModule { }