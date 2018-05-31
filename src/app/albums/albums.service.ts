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

  getAlbumByById(id: number) {
    for (const album of this.albums) {
      if (album.id === id) {
        return album;
      }
    }
    return null;
  }

}
