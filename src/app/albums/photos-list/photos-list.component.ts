import { Component, OnInit } from '@angular/core';
import {Photo} from './photo.model';
import {PhotosService} from './photos.service';
import {DataAccessService} from '../../share/data-access.service';
import {AlbumsService} from '../albums.service';
import {Album} from '../album.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  photos: Photo[];
  album: Album;
  id: number;
  term: string;
  i = 1;

  constructor(private photosService: PhotosService,
              private dataService: DataAccessService,
              private albumService: AlbumsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.album = this.albumService.getAlbumByById(this.id);
          this.dataService.getPhotosByAlbumId(this.album.id);
          this.photosService.photosChange
            .subscribe(
              (data: Photo[]) => {
                this.photos = data;
              }
            );
      }
      );
  }

}
