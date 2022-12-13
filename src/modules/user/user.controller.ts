import { Controller, Get } from '@nestjs/common';
import IUser from 'src/domain/user/IUser';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<IUser[]> {
    return this.userService.findAll();
  }
}
