import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumsComponent} from './albums.component';
import {BlankPhotoComponent} from './blank-photo/blank-photo.component';
import {PhotosListComponent} from './photos-list/photos-list.component';

const albumsRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent, children: [
      {path: '', component: BlankPhotoComponent},
      {path: ':id', component: PhotosListComponent}
    ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(albumsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AlbumsRoutingModule {}
