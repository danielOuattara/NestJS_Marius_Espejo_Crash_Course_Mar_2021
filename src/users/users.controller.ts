import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(+id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User[] {
    return this.userService.createUser(body);
  }
}
