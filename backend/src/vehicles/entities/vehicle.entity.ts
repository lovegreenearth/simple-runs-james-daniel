import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    OneToOne,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Vehicles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'varchar' })
    name: string;

    @Column({ nullable: true, type: 'varchar' })
    type: number;
    
    @Column({ nullable: true, type: 'varchar' })
    owner: number;

    @ManyToOne(() => Users, (users) => users.vehicles)
    @JoinColumn({ name: 'createdBy', referencedColumnName: 'id'})
    createdBy: Users;

    @Exclude()
    @Column({ default: false, select: false })
    isDeleted: boolean;
    
    @CreateDateColumn({ select: true })
    createdAt: Date;

    @Exclude()
    @UpdateDateColumn({ select: false })
    updatedAt: Date;
}
