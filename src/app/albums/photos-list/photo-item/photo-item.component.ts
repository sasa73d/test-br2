import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../photo.model';


@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: Photo;
  @Input() index: number;
  visiblePhoto = false;

  constructor() { }

  ngOnInit() {
  }

  onClickPhoto() {
    this.visiblePhoto = !this.visiblePhoto;
  }

}
