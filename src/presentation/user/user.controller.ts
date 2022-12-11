import { Controller, Get } from '@nestjs/common';
import { UserUseCase } from 'src/application/useCases/user.usecase';
import IUser from 'src/domain/database/models/User.model';

@Controller('user')
export class UserController {
    constructor(private readonly userUseCase: UserUseCase) { }

    @Get()
    async getAll(): Promise<IUser[]> {
        const users = await this.userUseCase.getUsers();

        return users;
    }
}