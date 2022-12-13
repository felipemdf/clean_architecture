import { Injectable } from '@nestjs/common';
import IUser from 'src/domain/user/IUser';
import findAllUsersUseCase from 'src/domain/user/use-cases/findAll.usecase';
import UserRepository from './user.repository';

@Injectable()
export class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    async findAll(): Promise<IUser[]> {
        return new findAllUsersUseCase(this.userRepository).execute();
    }
}
