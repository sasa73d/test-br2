import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {BlankUserComponent} from './blank-user/blank-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {AuthGuardService} from '../auth/auth-guard.service';

const usersRoutes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: BlankUserComponent},
      {path: ':id', component: ViewUserComponent},
      {path: ':id/edit', component: AddUserComponent}
    ]},
  { path: 'signup', component: AddUserComponent}
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
