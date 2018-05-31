import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {SigninComponent} from './auth/signin/signin.component';
import {BlankAuthComponent} from './blank-auth/blank-auth.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'auth-error', component: BlankAuthComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes/*, {preloadingStrategy: PreloadAllModules}*/)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
