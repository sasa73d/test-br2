import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../users/user-model/user.model';
import {EditService} from '../../edit.service';
import {NgForm} from '@angular/forms';
import {DataAccessService} from '../../../share/data-access.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user-edit',
  templateUrl: './edit-user-edit.component.html',
  styleUrls: ['./edit-user-edit.component.css']
})
export class EditUserEditComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  user: User;
  errorMessage: string;
  constructor(private editService: EditService,
              private dataService: DataAccessService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.editService.userEdit;
  }

  onAddUser(form: NgForm) {
    this.errorMessage = null;
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
    this.dataService.editUser(this.user)
      .subscribe(
        (data) => {
          this.editService.editUser(data);
          this.router.navigate(['edit/edit-user']);
        },
        (err) => {
          this.errorMessage = err.error.message;
        }
      );
  }

  onReset() {
    this.userForm.resetForm();
  }

}
