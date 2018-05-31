import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../user-model/user.model';
import {UsersService} from '../users.service';
import {DataAccessService} from '../../share/data-access.service';
import {Company} from '../user-model/company.model';
import {Address} from '../user-model/address.model';
import {Geo} from '../user-model/geo.model.';
import {Authoritie} from '../user-model/authoritie.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  id: number;
  user: User;
  editMode = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private dataService: DataAccessService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.errorMessage = null;
          this.id = +params['id'];
          if (params['id']) {
            this.editMode = params['id'] != null;
            this.user = this.userService.getUserById(this.id);
          } else {
            const address = new Address();
            address.geo = new Geo();
            this.user = new User();
            this.user.address = address;
            this.user.company = new Company();
          }
        }
      );
  }

  onAddUser(form: NgForm) {

      this.user.username = form.value.username;
      this.user.name = form.value.name;
      this.user.email = form.value.email;
      this.user.phone = form.value.phone;
      this.user.password = form.value.password;
      this.user.company.name = form.value.company_name;
      this.user.company.catchPhrase = form.value.catch_phrase;
      this.user.company.bs = form.value.bs;
      this.user.website = form.value.website;
      this.user.address.street = form.value.street;
      this.user.address.suite = form.value.suite;
      this.user.address.city = form.value.city;
      this.user.address.zipcode = form.value.zipcode;
      this.user.address.geo.lat = form.value.geo_lat;
      this.user.address.geo.lng = form.value.geo_lgn;
    if (this.editMode) {
      this.dataService.editUser(this.user)
        .subscribe(
          (data) => {
            const user = data;
            this.userService.editUser(user);
            this.router.navigate(['/users/' + user.id]);
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(error.error.message);
          }
        );
    } else {
      this.user.authrities.push(new Authoritie('ROLE_USER'))
      this.dataService.addUser(this.user)
        .subscribe(
          (data) => {
            const user: User = data;
            this.userService.addUser(user);
            this.router.navigate(['/signin']);
          },
          (error) => {
            this.errorMessage = error.error.message;
            console.log(error.error.message);
          }
        );
    }
  }

  onReset() {
    this.userForm.resetForm();
  }

  redirectTo(user: User) {
    if (!user) {
      this.router.navigate([''], {relativeTo: this.route});
      return false;
    } else {
      return true;
    }
  }

}
