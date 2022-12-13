import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IRepository from 'src/domain/IRepository';
import IUser from 'src/domain/user/IUser';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export default class UserRepository implements IRepository<IUser> {

    constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

    async findAll(): Promise<IUser[]> {
        console.log("findAll");
        return await this.repository.find();
    }
}