import { Injectable } from '@angular/core';
import {Album} from './album.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AlbumsService {
  albums: Album[];
  albumsChange = new Subject<Album[]>();

  constructor() { }

  setAlbums(albums: Album[]) {
    this.albums = albums;
    this.albumsChange.next(this.albums);
  }

  getAlbumByIndex(index: number) {
    return this.albums[index];
  }

}
