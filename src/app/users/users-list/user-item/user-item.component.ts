import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../user-model/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  id: number;
  constructor() { }

  ngOnInit() {
    this.id = this.user.id;
  }

}
