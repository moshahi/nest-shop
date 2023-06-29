import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'email is necessary.' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'phone number is necessary.' })
  @IsPhoneNumber('IR', { message: 'incorrect phone number format' })
  phoneNumber: string;

  @IsNotEmpty({ message: 'password is necessary.' })
  password: string;
}
