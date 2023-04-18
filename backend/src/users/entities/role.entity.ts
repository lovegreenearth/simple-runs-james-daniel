import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { Users } from './user.entity';

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'varchar' })
    name: string;

    @Column({ nullable: true, type: 'varchar' })
    description: string;

    @OneToMany(() => Users, (user: Users) => user.role)
    user: Users[];
}
