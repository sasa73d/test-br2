import {Injectable, OnInit} from '@angular/core';
import {User} from '../users/user-model/user.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditService {
  userEdit: User;
  userEditChange = new Subject<User>();

  constructor() { }

  setUser(user: User) {
    this.userEdit = user;
    this.userEditChange.next(this.userEdit);
  }

  editUser(user: User) {
    this.userEdit = user;
  }
}
