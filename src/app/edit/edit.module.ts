import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditRoutingModule} from './edit-routing.module';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { EditAlbumsComponent } from './edit-albums/edit-albums.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditBlankComponent } from './edit-blank/edit-blank.component';
import { EditPostsListComponent } from './edit-posts/edit-posts-list/edit-posts-list.component';
import { EditPostItemComponent } from './edit-posts/edit-posts-list/edit-post-item/edit-post-item.component';
import {ShareModule} from '../share/share.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditPostViewComponent } from './edit-posts/edit-post-view/edit-post-view.component';
import { EditPostBlankComponent } from './edit-posts/edit-post-blank/edit-post-blank.component';
import { EditPostNewComponent } from './edit-posts/edit-post-new/edit-post-new.component';
import {EditCommentComponent} from './edit-posts/edit-post-view/edit-comment/edit-comment.component';
import { EditUserViewComponent } from './edit-user/edit-user-view/edit-user-view.component';
import { EditUserEditComponent } from './edit-user/edit-user-edit/edit-user-edit.component';

@NgModule({
  declarations: [
  EditPostsComponent,
  EditAlbumsComponent,
  EditUserComponent,
  EditBlankComponent,
  EditPostsListComponent,
  EditPostItemComponent,
  EditPostViewComponent,
  EditPostBlankComponent,
  EditPostNewComponent,
  EditCommentComponent,
  EditUserViewComponent,
  EditUserEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditRoutingModule,
    ShareModule,
    NgxPaginationModule,
    ShareModule
  ]
})
export class EditModule {
}
