import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Users } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AuthController],
  providers: [AuthService, Users],
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secretOrPrivateKey: process.env.JWT_SECRET_KEY,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRATION_TIME,
        },
      }),
    })
  ],
})
export class AuthModule {}
