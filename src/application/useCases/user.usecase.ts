import { Injectable, Logger } from '@nestjs/common';
import IUser from 'src/domain/database/models/User.model';
import IUserRepository from 'src/domain/database/repository/user.repository';
import { IUserUseCase } from 'src/domain/useCases/user.usecase';

@Injectable()
export class UserUseCase implements IUserUseCase {
  private readonly logger = new Logger(UserUseCase.name);

  constructor(private readonly usersRepository: IUserRepository) { }

  async getUsers(): Promise<IUser[]> {
    this.logger.log('Find all users');

    return this.usersRepository.findAll();
  }

}
