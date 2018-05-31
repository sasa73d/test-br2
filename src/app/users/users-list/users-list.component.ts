import { Component, OnInit } from '@angular/core';
import {User} from '../user-model/user.model';
import {UsersService} from '../users.service';
import {DataAccessService} from '../../share/data-access.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];
  term: string;
  p = 1;
  constructor(public dataService: DataAccessService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.dataService.getUsers();
    this.usersService.usersChange
      .subscribe(
        (data: User[]) => {
          this.users = data;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
