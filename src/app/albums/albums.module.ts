import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlbumsRoutingModule} from './albums-routing.module';
import {AlbumsComponent} from './albums.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumItemComponent } from './albums-list/album-item/album-item.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotoItemComponent } from './photos-list/photo-item/photo-item.component';
import { BlankPhotoComponent } from './blank-photo/blank-photo.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumsListComponent,
    AlbumItemComponent,
    PhotosListComponent,
    PhotoItemComponent,
    BlankPhotoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlbumsRoutingModule,
    NgxPaginationModule,
    ShareModule
  ]
})
export class AlbumsModule {}
