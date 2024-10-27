import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return this.userService.getUserById(+id);
  }

  @Post()
  createUser(@Body() body: any): any {
    return this.userService.createUser(body);
  }
}
