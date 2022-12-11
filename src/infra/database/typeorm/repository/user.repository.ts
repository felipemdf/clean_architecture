import { Injectable } from '@nestjs/common';
import IUser from 'src/domain/database/models/User.model';
import IUserRepository from 'src/domain/database/repository/user.repository';



@Injectable()
export class UserRepository extends IUserRepository {
  create(): IUser {
    console.log("create");
    return;
  }
  findAll(): IUser[] {
    console.log("findAll");
    return;
  }

}
