import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicles } from 'src/vehicles/entities/vehicle.entity';
import { Roles } from './entities/role.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([
      Roles,
      Vehicles
    ])
  ]
})
export class UsersModule {}
