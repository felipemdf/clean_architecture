import IUser from 'src/domain/database/models/User.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 200 })
    name: string;

}