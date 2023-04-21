import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Users } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, Users, JwtStrategy],
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Users]),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secretOrPrivateKey: process.env.JWT_SECRET_KEY || 'secret',
        signOptions: {
          expiresIn: process.env.JWT_EXPIRATION_TIME || '3d',
        },
      }),
    })
  ],
})
export class AuthModule {}
