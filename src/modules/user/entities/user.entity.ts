import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar', length: 120 })
    public name: string;

}