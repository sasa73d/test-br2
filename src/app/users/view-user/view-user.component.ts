import { Component, OnInit } from '@angular/core';
import {User} from '../user-model/user.model';
import {UsersService} from '../users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataAccessService} from '../../share/data-access.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User;
  id: number;
  constructor(private usersService: UsersService,
              private routeActive: ActivatedRoute,
              private router: Router,
              private dataService: DataAccessService) { }

  ngOnInit() {
    this.routeActive.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.user = this.usersService.getUserById(this.id);
        }
      );
  }

  redirectTo(user: User) {
    if (!user) {
      this.router.navigate([''], {relativeTo: this.routeActive});
      return false;
    } else {
      return true;
    }
  }

  onEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.routeActive});
    // or
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.routeActive});
  }

  onDelete() {
    if (confirm('Do you want to delete the user - ' + this.user.username + '?')) {
      this.dataService.deleteUser(this.user)
        .subscribe(
          (data) => {
            console.log(data);
            this.usersService.deleteUser(this.id);
            this.router.navigate(['/users']);
          },
          (error) => {
            console.log('ERROR: ' + error.error.message);
          }
        );
    }
  }

}
