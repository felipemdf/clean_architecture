import IUser from "../database/models/User.model";

export interface IUserUseCase {
    getUsers(): Promise<IUser[]>;
}