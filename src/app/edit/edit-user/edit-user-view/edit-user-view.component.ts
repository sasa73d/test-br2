import { Component, OnInit } from '@angular/core';
import {User} from '../../../users/user-model/user.model';
import {EditService} from '../../edit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user-view',
  templateUrl: './edit-user-view.component.html',
  styleUrls: ['./edit-user-view.component.css']
})
export class EditUserViewComponent implements OnInit {
  user: User;

  constructor(private editService: EditService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.editService.userEdit;
  }

  onEdit() {
    this.router.navigate(['edit/edit-user/edit-user']);
  }

}
