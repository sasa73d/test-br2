import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './users-list/user-item/user-item.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {UsersRoutingModule} from './users-routing.module';
import { BlankUserComponent } from './blank-user/blank-user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserItemComponent,
    AddUserComponent,
    ViewUserComponent,
    BlankUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgxPaginationModule,
    ShareModule
  ]
})
export class UsersModule {}
