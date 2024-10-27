import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Ann' },
    { id: 3, name: 'Mike' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User[] {
    this.users = [
      ...this.users,
      { id: new Date().getTime(), ...createUserDto },
    ];
    return this.getUsers();
  }
}
