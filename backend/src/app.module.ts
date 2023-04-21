import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TrackingsModule } from './trackings/trackings.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({})
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_DATABASE || 'simple_runs',
      timezone: '+00:00',
      entities: [__dirname + '/./**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
