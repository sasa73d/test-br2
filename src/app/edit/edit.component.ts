import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {EditService} from './edit.service';
import {DataAccessService} from '../share/data-access.service';
import {User} from '../users/user-model/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userEdit: User;
  constructor(private authService: AuthService,
              private editService: EditService,
              private dataService: DataAccessService) { }

  ngOnInit() {
    this.dataService.getUserByUsername(this.authService.username);
    this.editService.userEditChange
      .subscribe(
        (data: User) => {
          this.userEdit = data;
        }
      )
  }

  getUsername() {
    if (this.userEdit) {
    return this.userEdit.username;
    } else {
      return 'user';
    }
  }

}
