import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthService } from './auth.service';
import { LoginDTO, SignUpDto } from './dto/user.dto';
import {
  ApiTags
} from '@nestjs/swagger';
import { WriteResponse } from 'src/shared/response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async LogIn(@Body() data: LoginDTO) {
    try {
      let user = await this.authService.LogIn(data);
      if (!user) {
        return WriteResponse(400, data, 'Invalid Credentials');
      }
      return WriteResponse(200, user, 'Logged in Successfully.');
    } catch (e) {
      if (e.code == 203) {
        return WriteResponse(400, false, e.message);
      }
      console.log(e)
      return WriteResponse(400, false, 'Opps! Something went wrong.');
    }
  }

  @Post('signup')
  async SignUp(@Body() data: any) {
    try {
      let user = await this.authService.SignUp(data);
      
      return WriteResponse(200, user, 'Sign Up Successfully.');
    } catch (e) {
      if (e.code == 203) {
        return WriteResponse(400, false, e.message);
      }
      console.log(e)
      return WriteResponse(400, false, 'Opps! Something went wrong.');
    }
  }
}
