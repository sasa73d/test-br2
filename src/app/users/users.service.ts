import { Injectable } from '@angular/core';
import {User} from './user-model/user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {
  users: User[];
  usersChange = new Subject<User[]>()

  constructor() {}

  setUsers(users: User[]) {
    this.users = users;
    this.usersChange.next(this.users);
  }

  getUserByIndex(index: number) {
    return this.users[index];
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
