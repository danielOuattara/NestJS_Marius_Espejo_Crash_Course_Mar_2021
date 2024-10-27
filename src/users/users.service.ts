import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Ann' },
    { id: 3, name: 'Mike' },
  ];

  getUsers(): any {
    return this.users;
  }

  getUserById(id: number): any {
    return this.users.find((user) => user.id === id);
  }

  createUser(name: string): any[] {
    this.users = [...this.users, { id: new Date().getTime(), name }];
    return this.getUsers();
  }
}
