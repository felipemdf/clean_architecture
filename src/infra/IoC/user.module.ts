import { Module } from '@nestjs/common';
import { UserUseCase } from 'src/application/useCases/user.usecase';
import IUserRepository from 'src/domain/database/repository/user.repository';
import { UserController } from 'src/presentation/user/user.controller';
import { UserRepository } from '../database/typeorm/repository/user.repository';


@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        UserUseCase,
        { provide: IUserRepository, useClass: UserRepository },
    ],
})
export class UserModule { }