import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {DataAccessService} from '../share/data-access.service';
import {PostsService} from '../posts/posts.service';
import {CommentsService} from '../posts/comments/comments.service';
import {UsersService} from '../users/users.service';
import {AlbumsService} from '../albums/albums.service';
import {PhotosService} from '../albums/photos-list/photos.service';
import {AuthService} from '../auth/auth.service';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {EditPostsService} from '../edit/edit-posts/edit-posts.service';
import {EditService} from '../edit/edit.service';
import {AuthGuardService} from '../auth/auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    DataAccessService,
    PostsService,
    CommentsService,
    UsersService,
    AlbumsService,
    PhotosService,
    AuthService,
    EditService,
    EditPostsService,
    AuthGuardService
  ]
})
export class CoreModule {}
