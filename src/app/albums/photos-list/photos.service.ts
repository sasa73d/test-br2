import { Injectable } from '@angular/core';
import {Photo} from './photo.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PhotosService {
  photos: Photo[];
  photosChange = new Subject<Photo[]>();

  constructor() { }

  setPhotos(photos: Photo[]) {
    this.photos = photos;
    this.photosChange.next(this.photos);
  }

}
