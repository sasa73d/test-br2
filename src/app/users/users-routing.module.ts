import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {BlankUserComponent} from './blank-user/blank-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {AddUserComponent} from './add-user/add-user.component';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent, children: [
      {path: '', component: BlankUserComponent},
      {path: 'new', component: AddUserComponent},
      {path: ':id', component: ViewUserComponent},
      {path: ':id/edit', component: AddUserComponent}
    ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
