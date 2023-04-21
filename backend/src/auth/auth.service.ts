import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { WriteResponse } from 'src/shared/response';
import { Role } from 'src/shared/enum/Role';
import { authorize, use } from 'passport';
import { UserActionLogging } from '../shared/helper';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async LogIn(data: any): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { email: data.email, isDeleted: false },
      relations: ['role'],
    });

    if (!user) return null;

    let password = bcrypt.compareSync(data.password, user.password);

    if (user && password) {
      const { password, ...result } = user;
      let payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        gender: user.gender,
        address: user.address,
        profilePhoto: user.profilePhoto,
        vehicle: user.vehicle
      };
      let token = this.jwtService.sign(payload);

      return {
        token,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        phone: user.phone,
        gender: user.gender,
        address: user.address,
        profilePhoto: user.profilePhoto,
        vehicle: user.vehicle
      };
    }
    return null;
  }

  async SignUp(data: any) {
    const checkDuplicate = await this.usersRepository.find({
      where: {
        email: data.email, 
        isDeleted: false
      }
    });
    if(checkDuplicate.length > 0) {
      throw new BadRequestException();
    } else {
      let user = this.usersRepository.create(data);
      let createdUser = await this.usersRepository.save(user);
      return createdUser;
    }
  }
}
