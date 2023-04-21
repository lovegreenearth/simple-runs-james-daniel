import { Controller, Get, Post, Body, Req, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt.auth.gaurds';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags, ApiParam } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('driver-list')
  async getDriverList(@Body() Ipagination, @Req() req) {
    return this.usersService.getDriverList(Ipagination, req);
  }
}
