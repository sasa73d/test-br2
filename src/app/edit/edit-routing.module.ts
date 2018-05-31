import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './edit.component';
import {EditBlankComponent} from './edit-blank/edit-blank.component';
import {EditPostsComponent} from './edit-posts/edit-posts.component';
import {EditAlbumsComponent} from './edit-albums/edit-albums.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {EditPostBlankComponent} from './edit-posts/edit-post-blank/edit-post-blank.component';
import {EditPostViewComponent} from './edit-posts/edit-post-view/edit-post-view.component';
import {EditPostNewComponent} from './edit-posts/edit-post-new/edit-post-new.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {EditUserViewComponent} from './edit-user/edit-user-view/edit-user-view.component';
import {EditUserEditComponent} from './edit-user/edit-user-edit/edit-user-edit.component';

const editRoutes: Routes = [
  { path: 'edit', component: EditComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: EditBlankComponent},
      {path: 'edit-posts', component: EditPostsComponent, children: [
          {path: '', component: EditPostBlankComponent},
          {path: 'new', component: EditPostNewComponent},
          {path: ':id', component: EditPostViewComponent},
          {path: ':id/edit', component: EditPostNewComponent}
        ]},
      {path: 'edit-albums', component: EditAlbumsComponent},
      {path: 'edit-user', component: EditUserComponent, children: [
          {path: 'edit-user', component: EditUserEditComponent},
          {path: '', component: EditUserViewComponent}
        ]}
    ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(editRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditRoutingModule {
}
