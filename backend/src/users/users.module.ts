import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicles } from 'src/vehicles/entities/vehicle.entity';
import { Roles } from './entities/role.entity';
import { Users } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      Users,
      Roles,
      Vehicles
    ])
  ]
})
export class UsersModule {}
