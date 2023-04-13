import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async getAllUsers(@Body() createUser: CreateUserDTO) {
    return createUser;
  }
}
