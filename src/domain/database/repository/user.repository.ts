import IUser from "../models/User.model";

export default abstract class IUserRepository {
    abstract create(user: IUser): IUser
    abstract findAll(): IUser[]
}