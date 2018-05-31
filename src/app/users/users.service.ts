import { Injectable } from '@angular/core';
import {User} from './user-model/user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UsersService {
  users: User[] = new Array<User>();
  usersChange = new Subject<User[]>()

  constructor() {}

  setUsers(users: User[]) {
    this.users = users;
    this.usersChange.next(this.users);
  }

  getUserById(id: number) {
    return this.users.find(x => x.id === id);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  editUser(editUser: User) {
    for (let user of this.users) {
      if (user.id === editUser.id) {
        user = editUser;
      }
    }
  }

  deleteUser(id: number) {
    const tempUsers = new Array<User>();
    for (let user of this.users) {
      if (user.id !== id) {
        tempUsers.push(user);
      }
    }
    this.users = tempUsers;
    this.usersChange.next(this.users);
  }

}
