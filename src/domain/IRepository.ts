export default interface IRepository<Type> {
    findAll(): Promise<Type[]>;
    // findById(id: number): Type;
    // create(object: Type): void;
    // update(id: number, object: Partial<Type>): void;
    // delete(id: number): void;
}