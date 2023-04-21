import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { Roles } from './entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
  ){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getDriverList(Ipagination, req) {
    const { curPage, perPage, sortBy, direction } = Ipagination;

    let lwhereClause = ` f.isDeleted = 0 and f.role = 2`;

    let skip = (curPage - 1) * perPage;

    var orderBy = `f.${sortBy}`;

    let query = await this.usersRepository
      .createQueryBuilder('f')
      .select(['f.id', 'f.firstName', 'f.lastName', 'f.email', 'f.phone', 'f.gender', 'f.address', 'f.profilePhoto', 'f.vehicle', 'f.createdBy', 'f.createdAt', 'roles.id', 'roles.name'])
      .leftJoin('f.role', 'roles')
      .where(lwhereClause)
      .skip(skip)
      .take(perPage)
      .orderBy(
        orderBy,
        direction == 'DESC' || direction == 'desc' ? 'DESC' : 'ASC',
      )
      .getManyAndCount();

    return {
      data: query[0],
      count: query[1]
    };
  }
}
