import { Component, OnInit } from '@angular/core';
import {Album} from '../album.model';
import {DataAccessService} from '../../share/data-access.service';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums: Album[];
  term: string;
  p = 1;

  constructor(private dataService: DataAccessService,
              private albumsService: AlbumsService) { }

  ngOnInit() {
    this.dataService.getAlbums();
    this.albumsService.albumsChange
      .subscribe(
        (data: Album[]) => {
          this.albums = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
