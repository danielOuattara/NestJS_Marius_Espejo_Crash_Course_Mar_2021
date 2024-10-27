import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({
    name: 'name',
    required: false,
  })
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.userService.getUsers(name);
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(+id);
  }

  @ApiCreatedResponse({
    type: User,
    isArray: true,
    description:
      'return an array of all users with the new created user among them',
  })
  @Post()
  createUser(@Body() body: CreateUserDto): User[] {
    return this.userService.createUser(body);
  }
}
