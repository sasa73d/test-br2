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

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule
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
    PhotosService
  ]
})
export class CoreModule {}
