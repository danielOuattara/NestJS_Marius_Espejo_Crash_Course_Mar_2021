import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
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
