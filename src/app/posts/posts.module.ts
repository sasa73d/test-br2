import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PostItemComponent } from './post-item/post-item.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import {PostsRoutingModel} from './posts-routing.model';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    CommentsComponent,
    CommentItemComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModel,
    NgxPaginationModule,
    ShareModule
  ]
})
export class PostsModule {}
