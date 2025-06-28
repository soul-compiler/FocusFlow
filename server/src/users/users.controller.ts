import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userSerice: UsersService) {}

  @Post('/register')
  async create(@Body() body: CreateUserDTO) {
    return await this.userSerice.create(body);
  }
}
