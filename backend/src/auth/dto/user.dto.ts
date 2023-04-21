import {
  IsAlphanumeric,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class LoginDTO {
  @IsEmail()
  @ApiProperty()
  @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
    message: 'email must be an email address.',
  })
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class SignUpDto {
  @IsEmail()
  @ApiProperty()
  @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
    message: 'email must be an email address.',
  })
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

