import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Roles } from './role.entity';
import { Vehicles } from 'src/vehicles/entities/vehicle.entity';

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ nullable: true, type: 'varchar', length: 100 })
  firstName: string;

  @Column({ nullable: true, type: 'varchar', length: 100 })
  lastName: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Exclude({ toClassOnly: true })
  @Column({ nullable: true })
  password: string;

  @ManyToOne(() => Roles, (role) => role.user)
  @JoinColumn({ name: 'role', referencedColumnName: 'id' })
  role: Roles;

  @Column({ unique: false, nullable: true })
  phone: string;

  @Column({ unique: false, nullable: true })
  gender: string;

  @Column({ unique: false, nullable: true })
  address: string;

  @Column({ unique: false, nullable: true })
  profilePhoto: string;

  @Column({ unique: false, nullable: true })
  vehicle: number;

  @OneToMany(() => Vehicles, (vehicle) => vehicle.createdBy)
  vehicles: Vehicles[];

  @Column({ nullable: true })
  createdBy: number;

  @Exclude()
  @Column({ default: false, select: false })
  isDeleted: boolean;

  @CreateDateColumn({ select: true })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
