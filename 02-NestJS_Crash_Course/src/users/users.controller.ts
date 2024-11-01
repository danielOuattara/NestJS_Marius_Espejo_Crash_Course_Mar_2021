import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
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
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.getUserById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiCreatedResponse({
    type: User,
    isArray: true,
    description:
      'return an array of all users with the new created user among them',
  })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User[] {
    return this.userService.createUser(body);
  }
}
