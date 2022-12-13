import IRepository from "src/domain/IRepository";
import IUser from "../IUser";

export default class findAllUsersUseCase {
    constructor(private readonly repository: IRepository<IUser>) { }

    execute(): Promise<IUser[]> {
        return this.repository.findAll();
    }
}